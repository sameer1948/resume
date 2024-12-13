import { Component } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly IMAGE_PATH : string = 'assets/profile-picture.jpg';

  name : string = 'Sameer Sheik';
  role : string = 'Software Developer';
  works : string = 'Works At : TCS';

  email : string = 'Sameer.Smaeer185@gmail.com';
  phone : string = '+91 - 8790761948';
  address : string = '3-98, Water Tank Street, PedaRayavaram, Rangampet Mandal, Andhra Pradesh, PIN : 533291';

  about : string = 'Work more Innovative for better Tomorrow.'

  linkedIn : string = 'naskldnlkas';
  githubLink : string = '';
  youtubeLink : string = '';
  nukariLink : string = '';

  skills: string[] = ['Java', 'SQL', 'Spring Boot', 'Spring Batch', 'Angular', 'Linux', 'AWS', 'GIT', 'Kafka', 'Python'];
  
  certifications : any = [
    {title : 'OCJA8', startDate : '02/2020', endDate : undefined},
    {title : 'AWS', startDate : undefined, endDate : undefined}
  ]

  languages : any = ['English', 'Telugu', 'Hindi']

  workExperience : any = [
    {jobTitle : 'Software Engineer', org : 'TataTata Consultancy Services', 
    location : 'Hyderabad', startDate : '03-Apr-2023', endDate : undefined,
    resp : [
      'sameer', 
      'sameer',
    ]},

    {jobTitle : 'Associate Developer ', org : 'Virtusa Consulting Services', 
    location : 'Hyderabad', startDate : '07-Oct-2020', endDate : '03-Feb-2023',
    resp : ['sameer', 'sameer']},
  ];
  
  interests : any = ['Science Experiments', 'Video Games', 'Learning New Technologies', 'Teaching Programming']

  achievements : any = [
    'Development and Deployment of Spring Batch Application.', 
    '5 Star Rating for Employment', 
    'Topper in Post Graduaction'];


  educations : any = [
    { title : 'MCA', insititue : 'Godavari Insititue Of Engineering And Technology', address : 'Rajahmundry',
    start : '09/2017', end : '09/2020', score : '8.80/10.0', course : 'Masters in Computer Applications'},
    { title : 'B.Com', insititue : 'SRR Degree College', address : 'Peddapuram',
    start : '04/2014', end : '05/2017', score : 'Distinction', course : 'Finance Management with Computer Applications'}
  ];
  



  


}
