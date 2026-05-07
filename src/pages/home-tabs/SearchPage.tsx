
import { IonContent, IonPage,} from '@ionic/react';

const SearchPage = () => (
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
        Search content
      </div>
    </IonContent>
  </IonPage>
);

export default SearchPage;