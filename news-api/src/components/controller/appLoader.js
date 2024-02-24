import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL, {
            apiKey: "a2efc605291a4e1694009969c70e20c5",
        });
    }
}

export default AppLoader;
