import { IonContent, IonPage} from '@ionic/react';

const LibraryPage = () => (
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
        Library content
      </div>
    </IonContent>
  </IonPage>
);

export default LibraryPage;