import { IonContent,  IonPage} from '@ionic/react';

const HomePage = () => (
  <IonPage>
    <IonContent>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        Listen now content
      </div>
    </IonContent>
  </IonPage>
);

export default HomePage;