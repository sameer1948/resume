import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('profileCard')
  profileCard!: ElementRef;

  readonly IMAGE_PATH : string = 'assets/profile-picture.jpg';
  readonly svc : string = 'database';
  readonly web : string = 'web';
  readonly desktop : string = 'desktop';
  readonly youtube : string = 'youtube';
  readonly linkedIn : string = 'linkedIn';
  readonly naukari : string = 'naukari';
  readonly git : string = 'git';
  readonly roles : string = 'roles';
  readonly finance : string = 'finance';
  readonly computer : string = 'computer';
  readonly eduSpecial : string = 'eduSpecial';

  name : string = 'Sameer Sheik';
  role : string = 'Software Developer';
  works : string = 'Tata Consultancy Services';

  email : string = 'Sameer.Sameer185@gmail.com';
  phone : string = '+91 - 8790761948';
  //address : string = '3-98, Water Tank Street, PedaRayavaram, Rangampet Mandal, Andhra Pradesh, PIN : 533291';
  address : string = 'Rajahmundry, Andhra Pradesh';

  about : string = 'Work more Innovative for better Tomorrow.'

  skills: string[] = ['Java', 'SQL', 'Spring Boot', 'Spring Batch', 'Angular', 'Linux', 'AWS', 'GIT', 'Kafka', 'Python'];
  
  certifications : any = [
    {title : 'OCJA8', startDate : '02/2020', endDate : undefined},
    {title : 'AWS', startDate : undefined, endDate : undefined}
  ]

  languages : any = ['English', 'Telugu', 'Hindi']

  workExperience : any = [
    {
      jobTitle : 'Software Engineer', 
      org : 'Tata Consultancy Services', 
      location : 'Hyderabad', 
      startDate : '03-Apr-2023', 
      endDate : undefined,
      description : 'Tata Consultancy Services Limited is an Indian multinational information technology services.',
      resp : [
        ' Implementing efficient processes for data ingestion, transformation, and storage in financial systems.',
        ' Utilize chunk-based processing and multi-threading to enhance batch job efficiency.', 
        ' Implement error handling, retry logic, and transaction management to ensure data integrity.',
        ' Monitor batch job execution, status, and performance using Control-M and Grafana.',        
        ' Implementing Spock with Groovy for Application Testing.',
        ' Support and maintain batch jobs, applying updates as business requirements evolve.',
        
      ]

      // resp : [
      //   ' Develop and maintain batch jobs using Spring Batch to process large volumes of data efficiently.',
      //   ' Utilize chunk-based processing and multi-threading techniques to improve the efficiency of batch jobs.',                
      //   ' Implement error handling, retry logic, and transaction management within batch jobs to ensure data integrity and consistency.',
      //   ' Monitor batch job execution, job status, and performance using Control-M and Grafana.',
      //   ' Develop unit and integration tests for batch jobs Using Spock with Groovy to ensure correctness and performance.',
      //   ' Document the design, development, and execution processes of batch jobs to ensure knowledge sharing and maintainability.',
      //   ' Provide ongoing support and maintenance for existing batch jobs, applying necessary updates or changes as business requirements evolve.'
      // ]
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
      title : 'Restaurant Application', 
      year : '2024', 
      description : 'Angular Application that allows users to browse menus, place orders, and leave feedback.',
      points : [
        ' Implemented a dynamic menu that updates in real-time with Angular components.',
        ' It allowing users to view item details, add items to their cart, and place orders.', 
        ' The ordering system communicates with the backend through Spring Boot REST APIs Calls.',
        ' The authentication was managed by Spring Security on the backend.',
        ' Integrated JWT (JSON Web Tokens) for secure user authentication.',       
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
  
  interests : any = [
    'Science Experiments',     
    'Learning New Technologies', 
    'Teaching Programming'
  ];

  achievements : any = [
    ' Successfully optimized the performance of batch processing jobs, reducing job execution time by 40% through the implementation of chunk-based processing and multithreading.', 
    ' Implemented advanced retry logic to handle failed job executions, reducing the occurrence of job failures by 20% and improving overall system reliability.',     
    ' Led the migration of the entire application codebase from Java 1.5 to Java 1.8, ensuring seamless transition with no downtime, enabling better performance with Java 1.8.',
    ' Managed the migration project with minimal disruption, coordinating testing and deployment schedules to ensure that users experienced zero downtime during the upgrade process.',
    ' Develop unit and integration tests for batch jobs Using Spock with Groovy to ensure correctness and performance.',

  ];


  educations : any = [
    { title : 'MCA', insititue : 'Godavari Insititue Of Engineering And Technology', address : 'Rajahmundry',
    start : '2017', end : '2020', score : '8.80/10.0', course : 'Masters in Computer Applications'},
    { title : 'B.Com', insititue : 'SRR Degree College', address : 'Peddapuram',
    start : '2014', end : '2017', score : 'Distinction', course : 'Finance Management with Computer Applications'}
  ];

  links : any = [ 
    {
      name : 'linkedIn',
      url : 'https://www.linkedin.com/in/sameer-93668a239/',
      icon : this.linkedIn
    },    
    {
      name : 'git',
      url : 'https://github.com/sameer1948',
      icon : this.git
    },
    {
      name : 'youtube',
      url : 'https://www.youtube.com/@sameerscoderoom',
      icon : this.youtube
    },

  ];
  
  abouts : any = [
    'Always eager to learn, I strive to stay up-to-date with industry trends and contribute to improving team workflows and processes. With a proactive approach to problem-solving and a passion for technology, I am eager to continue growing and delivering value in my role.',
    //' Driven by a constant desire to learn, I stay up-to-date with the latest industry trends and actively contribute to enhancing team workflows and processes. With a proactive mindset and a passion for technology, I am committed to continuous growth and delivering impactful solutions in my role."'
  ];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
    //this.iconRegistry.addSvgIcon('database', this.sanitizer.bypassSecurityTrustResourceUrl('assets/database.svg'));
    const svgIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#000000"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/></svg>`;

    const webIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#000000"><path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z"/></svg>`

    const desktopIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#000000"><path d="M360-400h260q42 0 71-29.5t29-71.5q0-42-30-71t-72-29q-8-51-47-85t-91-34q-41 0-75 22t-51 59q-48 2-81 36.5T240-520q0 50 35 85t85 35Zm0-80q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560h50v-10q0-29 20.5-49.5T480-640q29 0 49.5 20.5T550-570v50h70q8 0 14 6t6 14q0 8-6 14t-14 6H360Zm-40 360v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>`

    const youtubeIconContent = `
    <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 461.001 461.001" xml:space="preserve">
    <g>
      <path style="fill:#F61C0D;" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
        c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
        C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
        c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
    </g>
    </svg>`

    const linkedInIconContent = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
    </svg>`

    const gitIconContent = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
    </svg>`

    const naukariIconContent = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
    </svg>`

    const rolesIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#5f6368"><path d="M220-464 64-620l156-156 156 156-156 156ZM360-80v-200q-61-5-121-14.5T120-320l20-80q84 23 168.5 31.5T480-360q87 0 171.5-8.5T820-400l20 80q-59 16-119 25.5T600-280v200H360ZM220-576l44-44-44-44-44 44 44 44Zm260-104q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 280q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-360q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Zm202 280-68-120 68-120h136l68 120-68 120H682Zm46-80h44l22-40-22-40h-44l-22 40 22 40Zm-508-60Zm260-180Zm270 200Z"/></svg>`

    const financeIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z"/></svg>`

    const computerIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#5f6368"><path d="M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z"/></svg>`
    
    const eduIconContent = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
    fill="#5f6368"><path d="M360-120v-200q-62-5-121.5-14T120-360l20-80q83 23 168 31.5t172 8.5q86 0 171-8.5T820-440l20 80q-60 17-119.5 26T600-320v200H360Zm120-320q-34 0-57-23t-23-57q0-33 23-56.5t57-23.5q33 0 56.5 23.5T560-520q0 34-23.5 57T480-440ZM180-560q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T240-620q0 26-17.5 43T180-560Zm600 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T840-620q0 26-17.5 43T780-560ZM290-710q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T350-770q0 26-17.5 43T290-710Zm380 0q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T730-770q0 26-17.5 43T670-710Zm-190-50q-26 0-43-17t-17-43q0-25 17-42.5t43-17.5q25 0 42.5 17.5T540-820q0 26-17.5 43T480-760Z"/></svg>`
    
    this.iconRegistry.addSvgIconLiteral('database', this.sanitizer.bypassSecurityTrustHtml(svgIconContent));
    this.iconRegistry.addSvgIconLiteral('web', this.sanitizer.bypassSecurityTrustHtml(webIconContent));
    this.iconRegistry.addSvgIconLiteral('desktop', this.sanitizer.bypassSecurityTrustHtml(desktopIconContent));
    this.iconRegistry.addSvgIconLiteral('youtube', this.sanitizer.bypassSecurityTrustHtml(youtubeIconContent));
    this.iconRegistry.addSvgIconLiteral('linkedIn', this.sanitizer.bypassSecurityTrustHtml(linkedInIconContent));
    this.iconRegistry.addSvgIconLiteral('git', this.sanitizer.bypassSecurityTrustHtml(gitIconContent));
    this.iconRegistry.addSvgIconLiteral('naukari', this.sanitizer.bypassSecurityTrustHtml(naukariIconContent));
    this.iconRegistry.addSvgIconLiteral('roles', this.sanitizer.bypassSecurityTrustHtml(rolesIconContent));
    this.iconRegistry.addSvgIconLiteral('finance', this.sanitizer.bypassSecurityTrustHtml(financeIconContent));
    this.iconRegistry.addSvgIconLiteral('computer', this.sanitizer.bypassSecurityTrustHtml(computerIconContent));
    this.iconRegistry.addSvgIconLiteral('eduSpecial', this.sanitizer.bypassSecurityTrustHtml(eduIconContent));

    
  }


  download() {
    this.cdr.detectChanges();  // Ensure Angular renders everything before calling html2pdf

    const doc = new jsPDF();

    // Get the content to be downloaded as PDF
    const profileContent = this.profileCard.nativeElement;

    // Convert the HTML content to PDF
    doc.html(profileContent, {
      callback: (doc) => {
        doc.save('profile.pdf'); // Save the file with the name 'profile.pdf'
      },
      x: 10,
      y: 10
    });
  }

}