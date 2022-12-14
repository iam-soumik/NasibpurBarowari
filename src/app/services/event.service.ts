import { Injectable } from '@angular/core';
import { Events } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventList : Events[] = [];
  constructor() { 
    this.eventList.push(new Events(1, "দুর্গা পূজা", "দুর্গাপূজা, যা দুর্গোৎসব বা শারদোৎসব নামেও পরিচিত, ভারতীয় উপমহাদেশে উদ্ভূত একটি বার্ষিক হিন্দু উৎসব যা হিন্দু দেবী দুর্গার প্রতি শ্রদ্ধা ও শ্রদ্ধা জানায়।", true));
    this.eventList.push(new Events(2, "রক্ষা কালী পূজা", "কালী পূজা, শ্যামা পূজা বা মহানীষা পূজা নামেও পরিচিত,[1] ভারতীয় উপমহাদেশ থেকে উদ্ভূত একটি উৎসব, যা হিন্দু দেবী কালীর উদ্দেশ্যে উৎসর্গ করা হয়, যা হিন্দু ক্যালেন্ডার মাসের অশ্বযুজা (দীপান্নিতা অমাবস্যা) দিনে উদযাপিত হয়। আমন্ত ঐতিহ্য অনুসারে) বা কার্তিক (পূর্ণিমন্ত ঐতিহ্য অনুসারে)।", true));
    this.eventList.push(new Events(3, "বার্ষিক ক্রীড়া প্রতিযোগিতা", "বার্ষিক - বছরে একবার। স্পোর্টস মিট - এমন একটি ইভেন্ট যেখানে সংখ্যক ক্রীড়াবিদ অংশ নেয় .... এবং অ্যাথলেটিক্সের সাথে সম্পর্কিত বেশ কয়েকটি খেলা সম্পাদন করে। তাই, বার্ষিক ক্রীড়া বলতে সেই ক্রীড়া ইভেন্টগুলিকে বোঝায় যা প্রতি বছর একটি নির্দিষ্ট সময় বা সময়ে অনুষ্ঠিত হয়।", true));
    this.eventList.push(new Events(4, "সাংস্কৃতিক অনুষ্ঠান", "সাংস্কৃতিক অনুষ্ঠান অনেক রূপ নিতে পারে, যার মধ্যে রয়েছে: উত্সব, মাসিক শিল্প ও সঙ্গীত অনুষ্ঠান, খোলা স্টুডিও সেশন, একটি এলাকার জন্য অনন্য সাংস্কৃতিক ও জাতিগত অভিজ্ঞতার উদযাপন। ", true));
  }

  getEventsList(){
    return this.eventList;
  }
}
