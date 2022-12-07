export const Stor = {
    _subscriber() {
        console.log("call subscriber");
    },
    _state:{},
    _callSubscriber(){},
    getState(){},
    subscribe(observer){
        this._subscriber = observer;
    }
}