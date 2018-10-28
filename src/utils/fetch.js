import {
    fetchData,
} from "moji-react-native-utils";
import {
    userSignOut,
} from "../actions/user";

export default class Fetch {
    static fetch ({api, params={}}) {
        return fetchData.fetch({
            api,
            params,
        })
        .then((e)=>{
            switch (e.errcode) {
                case -999:
                    store.dispatch(userSignOut())
                    break;
                default:
                    break;
            }
            return e
        })
    }
    static async externalLinkFetch (...e){
        const res = await fetch(...e)
        return res.json()
    }

}
