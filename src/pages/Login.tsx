import { IonButton, IonPage } from "@ionic/react";

const Login: React.FC = () =>{
    return(
        <IonPage>
            <IonButton expand="full" href="/app">
                Login
            </IonButton>
        </IonPage>

    );
};

export default Login;