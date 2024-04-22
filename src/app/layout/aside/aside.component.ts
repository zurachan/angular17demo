import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faChevronDown,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  constructor() {}
  faChevronDown = faChevronDown;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faCalendar = faCalendar;
  faMapMarkerAlt = faMapMarkerAlt;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  ngOnInit() {}
}
