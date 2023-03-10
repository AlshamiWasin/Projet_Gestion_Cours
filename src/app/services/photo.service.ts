import { Injectable } from '@angular/core';
import {Directory, Filesystem} from "@capacitor/filesystem";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { UserPhoto } from "../interfaces/userphoto";
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

const url = 'http://localhost:3000/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: UserPhoto[] = [];

  /**
   * Ma clé pour le Storage : LocalStorage par exemple pour un browser
   */
    // eslint-disable-next-line @typescript-eslint/naming-convention
  private PHOTO_STORAGE = 'photos';

  constructor(private http: HttpClient) { }

  get(): Observable<UserPhoto[]> {
    return this.http.get<UserPhoto[]>(url);
  }

  getOne(userphoto: UserPhoto): Observable<UserPhoto[]> {
    return this.http.get<UserPhoto[]>(url+'/'+(userphoto.id||0) );
  }

  post(userphoto: UserPhoto): Observable<UserPhoto> {
    return this.http.post<UserPhoto>(url,userphoto);
  }

  put(userphoto: UserPhoto): Observable<UserPhoto> {
    return this.http.put<UserPhoto>(url+'/'+(userphoto.id||0),userphoto);
  }

  delete(userphoto: UserPhoto): Observable<UserPhoto> {
    return this.http.delete<UserPhoto>(url+'/'+(userphoto.id||0));
  }

  public async loadSaved() {
    /**
     const photoList = await Preferences.get({
      key : this.PHOTO_STORAGE
    });
     this.photos = JSON.parse(photoList.value) || [];
     */
    await this.get().subscribe(value => this.photos = value);

    // Display the photo by reading into base64 format
    for (const photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filePath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto(
      { resultType: CameraResultType.Uri, source: CameraSource.Camera, quality: 100 });

    /**
     * On sauve la capture de la webcam en fichier au format Photo
     * pour charger le tableau photos
     */

    let saveImageFile = await this.savePicture(capturedPhoto);
    await this.post(saveImageFile).subscribe(value => saveImageFile =value);
    this.photos.unshift(saveImageFile);
    /**
     * Prefences.set(....)
     */
    /**
     Preferences.set({
        key: this.PHOTO_STORAGE,
        value: JSON.stringify(this.photos),
      });
     */
  }

  public async deletePhoto(photo: UserPhoto) {
    const index = this.photos.indexOf(photo);
    if(index === -1) {
      return ;
    }
    await Filesystem.deleteFile({
      path: photo.filePath,
      directory: Directory.Data
    });
    this.photos.splice(index,1);
    /**
     Preferences.set({
        key: this.PHOTO_STORAGE,
        value: JSON.stringify(this.photos),
      });
     */
    await this.delete(photo).toPromise();
  }

  /**
   * On prend en paramètre la photo
   * on la transforme en Base64 pour le stockage
   * pour qu'il soit unique on crée un fichier avec la date().getTime (long) avec l'extension .jpeg
   * Puis on crée le fichier : Filesystem de capacitor (IOS ANDROID LINUX MAC WINDOWS BROWSER)
   *
   * ON CONVERTIE LE DUMP MEMOIRE DE LA PHOTO EN FICHIER JPEG
   * @param photo
   * @returns
   */
  private async savePicture(photo: Photo){
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      id:0,
      filePath: fileName,
      webviewPath: photo.webPath!
    };
  }

  /**
   * On converti la photo en format Base 64
   * @param photo
   * @returns
   */
  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }


  /**
   * le fichier Binaire en Base 64
   * @param blob
   * @returns
   */
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

}
