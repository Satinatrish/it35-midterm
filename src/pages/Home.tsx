import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import HomePage from './home-tabs/HomePage';
import LibraryPage from './home-tabs/LibraryPage';
import RadioPage from './home-tabs/RadioPage';
import SearchPage from './home-tabs/SearchPage';
import { playCircle, radio, library, search, logOutOutline } from 'ionicons/icons';

function Home() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonButton expand='full' href='/'>
            <IonIcon icon={logOutOutline} slot='start'></IonIcon>
            Signout
          </IonButton>
          
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact path="/" to="/home" />
              {/*
              Use the render method to reduce the number of renders your component will have due to a route change.

              Use the component prop when your component depends on the RouterComponentProps passed in automatically.
            */}
              <Route path="/home" render={() => <HomePage />} exact={true} />
              <Route path="/radio" render={() => <RadioPage />} exact={true} />
              <Route path="/library" render={() => <LibraryPage />} exact={true} />
              <Route path="/search" render={() => <SearchPage />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={playCircle} />
                <IonLabel>Listen now</IonLabel>
              </IonTabButton>

              <IonTabButton tab="radio" href="/radio">
                <IonIcon icon={radio} />
                <IonLabel>Radio</IonLabel>
              </IonTabButton>

              <IonTabButton tab="library" href="/library">
                <IonIcon icon={library} />
                <IonLabel>Library</IonLabel>
              </IonTabButton>

              <IonTabButton tab="search" href="/search">
                <IonIcon icon={search} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Home;