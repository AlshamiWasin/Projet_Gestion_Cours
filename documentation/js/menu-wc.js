'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Project_Gestion_Cours documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' : 'data-target="#xs-components-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' :
                                            'id="xs-components-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' : 'data-target="#xs-injectables-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' :
                                        'id="xs-injectables-links-module-AppModule-798f2d35a6e606931e11cf611c61856962651f87c6566fc6b2a2d08a38013d587a32bd37193055d3c01bc5bcd8bc0a72702ebfd31586893d9748d1a3a050d618"' }>
                                        <li class="link">
                                            <a href="injectables/CourBackEndService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourBackEndService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfesseurBackEndService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfesseurBackEndService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoursPageModule.html" data-type="entity-link" >CoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursPageModule-a4fc2528e52559bcdce1002d48b6c89f4796fa579c680a7dcc020e178c360769c3dae8b1c478eb5845d997077053239b59a3cd69cd4e9b6de4ab0c7fb15180a0"' : 'data-target="#xs-components-links-module-CoursPageModule-a4fc2528e52559bcdce1002d48b6c89f4796fa579c680a7dcc020e178c360769c3dae8b1c478eb5845d997077053239b59a3cd69cd4e9b6de4ab0c7fb15180a0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursPageModule-a4fc2528e52559bcdce1002d48b6c89f4796fa579c680a7dcc020e178c360769c3dae8b1c478eb5845d997077053239b59a3cd69cd4e9b6de4ab0c7fb15180a0"' :
                                            'id="xs-components-links-module-CoursPageModule-a4fc2528e52559bcdce1002d48b6c89f4796fa579c680a7dcc020e178c360769c3dae8b1c478eb5845d997077053239b59a3cd69cd4e9b6de4ab0c7fb15180a0"' }>
                                            <li class="link">
                                                <a href="components/CoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursPageRoutingModule.html" data-type="entity-link" >CoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-f6ea2f3a37a409e782e878132417e160cf77fa0ec810d2e5cc3642af37918fb50562eba3a5194cf88483d3cbd97cd30c37d5f4767ebce2bf4dbbd50f06e2def3"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfesseursPageModule.html" data-type="entity-link" >ProfesseursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfesseursPageModule-850191ba86bc93b129c94cb475c038d56267ba1a11bd9c58edee2d279e932706a361e89d5d92a98fbcf8fa925472fed309fe5f61fa41efffea8331db2fb90073"' : 'data-target="#xs-components-links-module-ProfesseursPageModule-850191ba86bc93b129c94cb475c038d56267ba1a11bd9c58edee2d279e932706a361e89d5d92a98fbcf8fa925472fed309fe5f61fa41efffea8331db2fb90073"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfesseursPageModule-850191ba86bc93b129c94cb475c038d56267ba1a11bd9c58edee2d279e932706a361e89d5d92a98fbcf8fa925472fed309fe5f61fa41efffea8331db2fb90073"' :
                                            'id="xs-components-links-module-ProfesseursPageModule-850191ba86bc93b129c94cb475c038d56267ba1a11bd9c58edee2d279e932706a361e89d5d92a98fbcf8fa925472fed309fe5f61fa41efffea8331db2fb90073"' }>
                                            <li class="link">
                                                <a href="components/ProfesseursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfesseursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfesseursPageRoutingModule.html" data-type="entity-link" >ProfesseursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RechecheCoursPageModule.html" data-type="entity-link" >RechecheCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RechecheCoursPageModule-d83f7a7c68e4a6decaaa024f88c17af0d7e0cdf1badcaf096f139045c09bb14dd2fb75a83002d274cf134bcdfd9cfff2d7e0bb65c0e5b0a0080121c768a7f492"' : 'data-target="#xs-components-links-module-RechecheCoursPageModule-d83f7a7c68e4a6decaaa024f88c17af0d7e0cdf1badcaf096f139045c09bb14dd2fb75a83002d274cf134bcdfd9cfff2d7e0bb65c0e5b0a0080121c768a7f492"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RechecheCoursPageModule-d83f7a7c68e4a6decaaa024f88c17af0d7e0cdf1badcaf096f139045c09bb14dd2fb75a83002d274cf134bcdfd9cfff2d7e0bb65c0e5b0a0080121c768a7f492"' :
                                            'id="xs-components-links-module-RechecheCoursPageModule-d83f7a7c68e4a6decaaa024f88c17af0d7e0cdf1badcaf096f139045c09bb14dd2fb75a83002d274cf134bcdfd9cfff2d7e0bb65c0e5b0a0080121c768a7f492"' }>
                                            <li class="link">
                                                <a href="components/RechecheCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RechecheCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RechecheCoursPageRoutingModule.html" data-type="entity-link" >RechecheCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RechercheProfesseursPageModule.html" data-type="entity-link" >RechercheProfesseursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RechercheProfesseursPageModule-f925f10387db0947dee74c2b4064d2b0f02e18080205497a5427a2ac38ca96f0474658785a8df8824aa34474b67bc01db080c124b5ca57e700d93352c780bfa6"' : 'data-target="#xs-components-links-module-RechercheProfesseursPageModule-f925f10387db0947dee74c2b4064d2b0f02e18080205497a5427a2ac38ca96f0474658785a8df8824aa34474b67bc01db080c124b5ca57e700d93352c780bfa6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RechercheProfesseursPageModule-f925f10387db0947dee74c2b4064d2b0f02e18080205497a5427a2ac38ca96f0474658785a8df8824aa34474b67bc01db080c124b5ca57e700d93352c780bfa6"' :
                                            'id="xs-components-links-module-RechercheProfesseursPageModule-f925f10387db0947dee74c2b4064d2b0f02e18080205497a5427a2ac38ca96f0474658785a8df8824aa34474b67bc01db080c124b5ca57e700d93352c780bfa6"' }>
                                            <li class="link">
                                                <a href="components/RechercheProfesseursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RechercheProfesseursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RechercheProfesseursPageRoutingModule.html" data-type="entity-link" >RechercheProfesseursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaisieCoursPageModule.html" data-type="entity-link" >SaisieCoursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaisieCoursPageModule-c2b8d0566ca9adbaf47d123855e72ddd81d102a19733e3dac34d8af82aa84108a12dcc5f2aac4ed098dabd651c352d0c8020408d7f0dad5a83e4f86bbfb375d1"' : 'data-target="#xs-components-links-module-SaisieCoursPageModule-c2b8d0566ca9adbaf47d123855e72ddd81d102a19733e3dac34d8af82aa84108a12dcc5f2aac4ed098dabd651c352d0c8020408d7f0dad5a83e4f86bbfb375d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaisieCoursPageModule-c2b8d0566ca9adbaf47d123855e72ddd81d102a19733e3dac34d8af82aa84108a12dcc5f2aac4ed098dabd651c352d0c8020408d7f0dad5a83e4f86bbfb375d1"' :
                                            'id="xs-components-links-module-SaisieCoursPageModule-c2b8d0566ca9adbaf47d123855e72ddd81d102a19733e3dac34d8af82aa84108a12dcc5f2aac4ed098dabd651c352d0c8020408d7f0dad5a83e4f86bbfb375d1"' }>
                                            <li class="link">
                                                <a href="components/SaisieCoursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaisieCoursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaisieCoursPageRoutingModule.html" data-type="entity-link" >SaisieCoursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SaisieProfesseursPageModule.html" data-type="entity-link" >SaisieProfesseursPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SaisieProfesseursPageModule-469893719ddbd4f41a8281853098ea89f99411d2b032824b5ab306022160416e86aab9ec47f21813a1fa330d88441e6cd0d46882c579e29446cbf2d2e92cfc24"' : 'data-target="#xs-components-links-module-SaisieProfesseursPageModule-469893719ddbd4f41a8281853098ea89f99411d2b032824b5ab306022160416e86aab9ec47f21813a1fa330d88441e6cd0d46882c579e29446cbf2d2e92cfc24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SaisieProfesseursPageModule-469893719ddbd4f41a8281853098ea89f99411d2b032824b5ab306022160416e86aab9ec47f21813a1fa330d88441e6cd0d46882c579e29446cbf2d2e92cfc24"' :
                                            'id="xs-components-links-module-SaisieProfesseursPageModule-469893719ddbd4f41a8281853098ea89f99411d2b032824b5ab306022160416e86aab9ec47f21813a1fa330d88441e6cd0d46882c579e29446cbf2d2e92cfc24"' }>
                                            <li class="link">
                                                <a href="components/SaisieProfesseursPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaisieProfesseursPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SaisieProfesseursPageRoutingModule.html" data-type="entity-link" >SaisieProfesseursPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' : 'data-target="#xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' :
                                            'id="xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' : 'data-target="#xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' :
                                            'id="xs-components-links-module-TabsPageModule-dc93590fcd51989cf2be001df22f204fb41bc791691c0515c89872850cdf21bdbc804a684cd85920a619fe6af992e60c324587eb378529eb406f77d16a295454"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CourBackEndService.html" data-type="entity-link" >CourBackEndService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfesseurBackEndService.html" data-type="entity-link" >ProfesseurBackEndService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Cours.html" data-type="entity-link" >Cours</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Professeurs.html" data-type="entity-link" >Professeurs</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});