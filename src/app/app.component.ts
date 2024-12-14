import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { start } from 'repl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly IMAGE_PATH : string = 'assets/profile-picture.jpg';
  readonly svc : string = 'database';
  readonly web : string = 'web';
  readonly desktop : string = 'desktop';

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
    {
      jobTitle : 'Software Engineer', 
      org : 'TataTata Consultancy Services', 
      location : 'Hyderabad', 
      startDate : '03-Apr-2023', 
      endDate : undefined,
      description : 'Tata Consultancy Services Limited is an Indian multinational information technology services.',
      resp : [
        'Improved efficiency by migrating ETL Batch Jobs to Spring Boot resulting in faster processing.', 
        ' Migrated ETL Batch Jobs to Spring Boot with integration of Control-M and Grafana Dashboard.',
        ' Achieved 20% increase in testing accuracy by implementing Spock with Groovy for Application Testing.'
      ]
    },

    {
      jobTitle : 'Associate Developer ', 
      org : 'Virtusa Consulting Services', 
      location : 'Hyderabad', 
      startDate : '07-Oct-2020', 
      endDate : '03-Feb-2023',
      description : 'Virtusa Corporation is an American Information Technology Services Company',
      resp : [
        'Worked in Java Migration from Version 1.5 to version 1.8.', 
        'Successfully Integrated Microsoft Azure Authentication SSO in the Servlets.',
        'Modified WebLogic\'s JMS call (Async) into Restful Service Calls.',
        'Successfully Integrated Apache Kafka Services in the Project.',
        'Contributions in Design and Developing Microservices from the huge Monolithic Application.'
      ]
    },
  ];

  personalExperience : any = [
    {
      title : 'Web Based Examination Application', 
      year : '2024', 
      description : ' This Application is useful for conducting MCQ Based Mock Test.',      
      points : [
        'Application Motive to Online Mock Examination within the Organization', 
        'Need to Add the Question and answer in the Database along with Date of examination.',
        'Application capable enough to generate repots on time and send it over the email.'
      ],
      fornt : 'Angular', 
      middle: 'Spring Boot', 
      back : 'Oracle SQL'
    },

    {
      title : 'Web Based Examination Application',
      year : '2020-2021', 
      description : ' This Application is useful for conducting MCQ Based Mock Test.',      
      points : [
        'Application Motive to Online Mock Examination within the Organization', 
        'Need to Add the Question and answer in the Database along with Date of examination.',
        'Application capable enough to generate repots on time and send it over the email.'
      ], 
      fornt : 'Angular',
      middle: 'Spring Boot', 
      back : 'Oracle SQL'
    },

    {
      title : 'VRide', 
      year : '2020', 
      description : 'Simple Carpooling Application, offering carpooling services within the Organization.',      
      points : [
        'This was application built for employees who can offer car sharing within the Organization', 
        'This application was Built on Angular as Frontend, Spring Boot as Backend and MySQL as Database.',      
      ], 
      fornt : 'Angular', 
      middle: 'Spring Boot', 
      back : 'MY SQL'
    },

    {
      title : 'Intelligent Monitoring System', 
      year : '2019-2020', 
      description : 'A Facial Recognition Based Monitoring and Attendance system.',      
      points : [
        'This application was built for Generating Attendance in the Class Rooms & Staff Room.', 
        'This Application is capable enough to capture, process and sends reports to user.',
      ], 
      fornt : 'Python', 
      middle : undefined, 
      back : 'SQL Lite'
    },

    {
      title : 'Libraray Management System', 
      year : '2018-2019', 
      description : 'Sample Application for Managing the Library Inventory.',      
      points : [
        'This Application was built like a Mini project in the Academics.', 
        ' It was developed using Java Swings and Oracle SQL',
      ], 
      fornt : 'Java Swings', 
      middle: 'Core Java', 
      back : 'Oracle SQL'
    }    
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
  
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    //this.iconRegistry.addSvgIcon('database', this.sanitizer.bypassSecurityTrustResourceUrl('assets/database.svg'));
    const svgIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#000000"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>`;

    const webIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#000000"><path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/></svg>`

    const desktopIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#000000"><path d="M360-400h260q42 0 71-29.5t29-71.5q0-42-30-71t-72-29q-8-51-47-85t-91-34q-41 0-75 22t-51 59q-48 2-81 36.5T240-520q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560h50v-10q0-29 20.5-49.5T480-640q29 0 49.5 20.5T550-570v50h70q8 0 14 6t6 14q0 8-6 14t-14 6H360Zm-40 360v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>`
    
    this.iconRegistry.addSvgIconLiteral('database', this.sanitizer.bypassSecurityTrustHtml(svgIconContent));
    this.iconRegistry.addSvgIconLiteral('web', this.sanitizer.bypassSecurityTrustHtml(webIconContent));
    this.iconRegistry.addSvgIconLiteral('desktop', this.sanitizer.bypassSecurityTrustHtml(desktopIconContent));

  }



  


}
