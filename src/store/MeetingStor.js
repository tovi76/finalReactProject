import { makeObservable , computed, observable, action } from "mobx";



class MeetingStor {
    meetingList = [];
    title="PHOTOGRAPHY";
    address="noifeld 29, Bney-Brak";
    phone="052-7605160";
    owner="Tovi kot";
    description="";
   


    constructor() {
        makeObservable(this, {
        meetingList:observable,
            title:observable,
            address:observable,
            phone:observable,
            owner:observable,
            description:observable,
            
            addMeeting: action,
            updateAdminHome:action,
                        setMeeting:action,
                        setBusiness:action,
                       

        })
    }


    setMeeting=(meetingList)=>{
        if (meetingList.length) {
            meetingList.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
        this.meetingList=[...meetingList];
    }}


    addMeeting = (meeting) => {
        this.meetingList = [...this.meetingList,meeting];
        console.log("MeetingList"+this.meetingList);
    }
    updateAdminHome=(adminHome)=>{
        this.adminHome=adminHome;
    }


    setBusiness = (data) => {

        if (data != undefined && data.name != undefined) {
          this.businessDetails = data;
    
        }
        else {
          this.businessDetails = {
            name: "החברה למתנסים",
            address: " רח' המלאכה 4, לוד 7152008",
            phone: " 073-2870100",
            owner: " מנכל החברה: טל בסקס ",
            logo: "https://coding-academy.org/images/ca_logo.png",
            description: "כ-180 מתנסים פועלים בכל רחבי הארץ, בערי פיתוח ובשכונות מצוקה, בערים גדולות ואחרות, במועצות מקומיות ואזוריות",
    
          }
    
        }
      }
    
    
    
    
    // sortMeetings = (meetingList) => {
    //     this.meetingList = meetingList.slice().sort((a, b) => {
    //       const dateA = new Date(a.dateTime);
    //       const dateB = new Date(b.dateTime);
    //       return dateA - dateB;
    //     });
    //   };

}
    export default new MeetingStor();