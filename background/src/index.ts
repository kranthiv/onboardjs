import {ChromeService} from './services/chrome.service';
import {MessagingService} from './services/messaging.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

let chromeSVC = new ChromeService();
chromeSVC.initilizeApp();

let msgSVC = new MessagingService();
msgSVC.receiveMessage();