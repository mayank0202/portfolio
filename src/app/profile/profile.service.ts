import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;
ƒ
  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Terraform-aws-s3 Module',
      desc: '',
      livedemo: 'https://registry.terraform.io/modules/mayank0202/s3/aws/1.0.1',
      githurl: 'github.com/mayank0202/terraform-aws-s3 ',
      registry: '',
      imgUrl: 'assets/images/terraform.png',
      tech: 'Terraform and github Actions'
    },

    {
      id: 2,
      title: 'Birthday Application',
      desc: '',
      livedemo: 'https://mayank0202.github.io/Birthday/',
      githurl: 'https://github.com/mayank0202/Birthday',
      mediumlink: '',
      imgUrl: 'assets/images/birthday.jpeg',
      tech: 'HTML AND CSS'
    },


    {
      id: 3,
      title: 'CRUD operation using PEAN stack',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/mayank0202/full-stack-Assignments',
      mediumlink: '',
      imgUrl: '',
      tech: 'Angular 10, Node, PostgreSQL, Express'
    },

    // {
    //   id: 4,
    //   title: 'Multiroom Chat Application in Node JS',
    //   desc: '',
    //   livedemo: 'https://chatapp-using-node.herokuapp.com/',
    //   githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
    //   mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
    //   imgUrl: 'assets/images/z23.png',
    //   tech: 'Node JS,Socket IO'
    // },


    // {
    //   id: 5,
    //   title: 'Integrate Medium Blogs on your React App',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
    //   githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
    //   mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
    //   imgUrl: 'assets/images/z4.png',
    //   tech: 'React JS'
    // },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Devops Engineer with 3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Terraform and Configuration files  . 
  Also worked with Javascript, Angular and UI with Responsive Designs .
  Have good understanding of programming languages like Python, Java, JavaScript and worked on databases like Postgresql, MySQL, MongoDB etc .
  Knowledge of various software design principles and patterns .
  Have used various cloud computing services with AWS .
  Used various tools like Docker, Github, Jenkins etc.`

  about = "Results-driven DevOps Engineer with a proven track record of 3 years in supporting, automating, and optimizing mission-critical deployments on AWS. Proficient in leveraging advanced configuration management, CI/CD practices, Terraform, and a strong understanding of DevOps methodologies. Seeking a challenging position where I can contribute my expertise, drive innovation, and adapt to evolving technologies while fostering professional growth."
  resumeurl = "https://resume-mayank.s3.amazonaws.com/Resume.pdf"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Terraform',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'Aws Services',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Python & Shell Scripting',
      'progress': '70%'
    },
    {
      'id': '4',
      'skill': 'PostgreSQL , MYSQL, MONGO',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Docker',
      'progress': '85%'
    },
    {
      'id': '6',
      'skill': 'Kubernetes',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Jenkins',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'Pulumi',
      'progress': '80%'
    },
    {
      'id': '9',
      'skill': 'Render',
      'progress': '80%'
    },
    {
      'id': '10',
      'skill': 'AWS LEX',
      'progress': '80%'
    }
  ];


  educationData: any = [];
  exprienceData: any = [
    {
      id: 1,
      company: 'Deloitte USI',
      location: 'Gurgaon',
      timeline: 'September 2024 to Present',
      role: 'AWS Devops Consultant',
      work: 'Working as a Devops Engineer .Responsible for handling and Managing the CI/CD work and also handles the docker files and scripts for automation. Written DockerFiles for many services which were used in the organization and also written docker-compose that builds all the images and pushed to Amazon ECR   .Creating snapshots and amazon machine images (AMIs) of the instances for backup and creating clone instances   .Created IAC tool i.e. cdktf for aws-lambda and have integated sns , sqs and vpc and that tool is created in typescript    .Managed AWS assets and integrated multiple AWS resources into solutions appropriate for company projects    .Knowledge of SonarQube for continuous inspection of Code Quality    .Proficient Knowledge of Terraform to automate various manual tasks.',

    },
    {
      id: 2,
      company: 'Sourcefuse Technologies',
      location: 'Noida, India',
      timeline: 'May 2021 to September 2024',
      role: 'Junior Engineer- Devops , Engineer - Devops',
      work: 'Working as a Devops Engineer .Responsible for handling and Managing the CI/CD work and also handles the docker files and scripts for automation. Written DockerFiles for many services which were used in the organization and also written docker-compose that builds all the images and pushed to Amazon ECR   .Creating snapshots and amazon machine images (AMIs) of the instances for backup and creating clone instances   .Created IAC tool i.e. cdktf for aws-lambda and have integated sns , sqs and vpc and that tool is created in typescript    .Managed AWS assets and integrated multiple AWS resources into solutions appropriate for company projects    .Knowledge of SonarQube for continuous inspection of Code Quality    .Proficient Knowledge of Terraform to automate various manual tasks.',

    },

  ]

  skills(): Observable<any> {
    
    return this.skillsData;
  }

  getProjects(): Observable<any> {
  
    return this.projects;
  }
  education(): Observable<any> {
    
    return this.educationData;
  }

  exprience(): Observable<any> {

    return this.exprienceData;
  }
}
