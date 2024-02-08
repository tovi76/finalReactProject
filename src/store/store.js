import { makeObservable, observable, action } from "mobx";



class DataStore {
    password = 12345;
    services = [];
    IsLogin = false;
    constructor() {
        makeObservable(this, {
            IsLogin: observable,
            services: observable,
            setServices: action,
            addService: action,
            editService: action,
            setIsLogin: action,
            updateService: action
        })
    }

    setServices = (services) => {
        this.services = [...services];
    }
    addService = (service) => {
        this.services = [...this.services, service];


    }

    updateService = (service) => {
        const serviceExists = this.services.find((s) => s?.name === service.name);
        console.log(serviceExists)
        if (serviceExists) {
            let ind = this.services.indexOf(serviceExists);
            this.services[ind] = service;
            this.services = [...this.services];

        }
    }
    editService = (service) => {
        this.services = [this.services, service];

    }

    setIsLogin(IsLogin) {

        this.IsLogin = IsLogin;
        console.log(IsLogin);
    }
}

export default new DataStore();