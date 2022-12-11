import React, { useRef, useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { saveAs } from "file-saver";
import "./Home.scss";
import { Link } from "react-scroll";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export const Home = () => {
  const [div, setdiv] = useState(true);
  const [isActive, setActive] = useState(false);
  const [projects, setprojects] = useState(true);
  const [activecompony, setactivecompony] = useState("synpulse");
  const [activatecompanyDetails, setActivateCompanyDetails] =
    useState("responsibilities");

  const myref = useRef(null);

  const synpulseTechnologyStack = [
    {
      path:"../Assest/technologies/aws.png",
      name:"AWS Services"
    },
    {
      path: "../Assest/technologies/react.png",
      name: "React",
    },
    {
      path: "../Assest/technologies/antd.svg",
      name: "ANT Design",
    },
    {
      path: "../Assest/technologies/docker.png",
      name: "Docker",
    },
    {
      path: "../Assest/technologies/hashicorp_vault.svg",
      name: "Hashicorp Vault",
    },
    {
      path: "../Assest/technologies/java.png",
      name: "Java",
    },
    {
      path: "../Assest/technologies/javascript.png",
      name: "Javascript",
    },
    {
      path: "../Assest/technologies/kubernates.png",
      name: "kubernates",
    },
    {
      path: "../Assest/technologies/postgreSQL.png",
      name: "PostgreSql",
    },
    {
      path: "../Assest/technologies/terraform.png",
      name: "Terraform",
    },
    {
      path: "../Assest/technologies/zoho.png",
      name: "Zoho",
    },
    {
      path: "../Assest/technologies/confluence.png",
      name: "Confluence",
    },
  ];

  const contactme = () => scrollToRef(myref);

  const handleeducation1 = () => {
    setdiv(true);
  };
  const handleeducation2 = () => {
    setdiv(false);
  };

  const saveFile = () => {
    saveAs(
      "https://jemish-viradiya-portfolio-app.herokuapp.com/Assest/Jemish Viradiya-Resume.pdf"
    );
  };

  const handleprojects = () => {
    setprojects(true);
    setActive(!isActive);
  };
  const handleclones = () => {
    setprojects(false);
    setActive(!isActive);
  };

  const handlecompony = (val) => {
    setactivecompony(val);
  };

  return (
    <div className="Main">
      <Header />
      <div className="HomeBody">
        <section id="home">
          <div className="container">
            <div className="MainDetails">
              <div className="userDetails">
                <div className="MainTitle">
                  <span>Software Developer</span>
                </div>
                <h2>
                  <span>J</span>emish <span>V</span>iradiya
                </h2>
                <p>
                  A Software Developer with enhanced intellectual growth,
                  knowledge, and I provide the best of my abilities and
                  technical skills to deliver diverse projects in a complex
                  environment and improve the organization's capacities to work
                  and contribute to growth and development.
                </p>
                <div className="contactBtns">
                  <button className="perpuleBtn" onClick={contactme}>
                    Contact Me
                  </button>
                  <Link src="./file/Jemish Viradiya-Resume.pdf">
                    <button className="outlineBtn" onClick={saveFile}>
                      {" "}
                      Download CV
                    </button>
                  </Link>
                  {/* <a className="outlineBtn" href="./Assest/Jemish Viradiya-Resume.pdf">Download CV</a> */}
                </div>
              </div>
              <div className="userImages">
                <img src="./profilePic.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="Education">
          <div className="container">
            <div className="MainTitle">
              <span>EDUCATION</span>
            </div>
            <div className="MainDetails educationdiv">
              <div className="selectBox selectBox1">
                {/* <Link to="educationscroll" spy={true} smooth={true}> */}
                <div className="clgBox" onClick={handleeducation1}>
                  <img src="../Assest/collagelogo/lambton.png" alt="" />
                  <h3>Lambton College</h3>
                </div>
                {/* </Link> */}

                {/* <Link to="educationscroll" spy={true} smooth={true}> */}
                <div className="clgBox" onClick={handleeducation2}>
                  <img src="../Assest/collagelogo/GNU.png" alt="" />
                  <h3>Ganpat University</h3>
                </div>
                {/* </Link> */}
              </div>

              <div className="right" id="educationscroll">
                <div style={{ display: div ? "block" : "none" }}>
                  <div className="detailHeader">
                    <img src="../Assest/collagelogo/lambton.png" alt="" />
                    <div>
                      <h3> Lambton Collage </h3>
                      <span>(Sept 2020 - April 2022)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Computer Software and Database development</h3>
                    <h5>topics</h5>
                    <div className="topic">
                      <div className="topicDiv">
                        <span>Web Technology</span>
                      </div>
                      <div className="topicDiv">
                        <span>Java (EE)</span>
                      </div>
                      <div className="topicDiv">
                        <span>Java (SE)</span>
                      </div>
                      <div className="topicDiv">
                        <span>Database development</span>
                      </div>
                      <div className="topicDiv">
                        <span>C#</span>
                      </div>
                      <div className="topicDiv">
                        <span>Asp.Net</span>
                      </div>
                      <div className="topicDiv">
                        <span>Python</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: div ? "none" : "block" }}>
                  <div className="detailHeader">
                    <img src="../Assest/collagelogo/GNU.png" alt="" />
                    <div>
                      <h3> Ganpat University </h3>
                      <span>(July 2015 - May 2019)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Bachelor of Technology in Computer Engineering</h3>
                    <h5>topics</h5>
                    <div className="topic">
                      <div className="topicDiv">
                        <span>Web Technology</span>
                      </div>
                      <div className="topicDiv">
                        <span>Cloud Computing</span>
                      </div>
                      <div className="topicDiv">
                        <span>Networking</span>
                      </div>
                      <div className="topicDiv">
                        <span>Advcance JAVA</span>
                      </div>
                      <div className="topicDiv">
                        <span>Database development</span>
                      </div>
                      <div className="topicDiv">
                        <span>C#</span>
                      </div>
                      <div className="topicDiv">
                        <span> ASP.NET</span>
                      </div>
                      <div className="topicDiv">
                        <span> Android</span>
                      </div>
                      <div className="topicDiv">
                        <span> IOS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="MainTitle">
              <span>my skills</span>
            </div>
            <div className="skills">
              {/* <span className="heading">My Skills</span> */}

              <div className="skillscircle">
                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        70<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Html</h2>
                </div>

                <div className="card">
                  <div className="percent javascipt">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        90<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Css</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        70<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Database</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        60<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">C</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        85<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Java</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        70<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Asp.Net</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        70<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">JAVA(J2EE)</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        80<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">JavaScript</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        75<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Angular JS</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        80<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">Node Js</h2>
                </div>

                <div className="card">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="number">
                      <h2>
                        80<span>%</span>
                      </h2>
                    </div>
                  </div>
                  <h2 className="text">React Js</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experince">
          <div className="container">
            <div className="MainTitle">
              <span>experiance</span>
            </div>
            <div className="MainDetails experincediv">
              <div className="new_right" id="compony_details">
                <div
                  className="selectedDetails"
                  style={{
                    display: activecompony === "synpulse" ? "block" : "none",
                  }}
                >
                  <div className="detailHeader">
                    <img src="../Assest/componylogo/synpulse.jpg" alt="" />
                    <div>
                      <h3>Synpulse</h3>
                      <span>(ontario, canada)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Full Stack Developer (May 2022 - Present)</h3>
                    <div className="experince_details">
                      <div className="option">
                        <button
                          className={isActive ? null : "activeBtn"}
                          onClick={() => {
                            setActivateCompanyDetails("responsibilities");
                            setActive(!isActive);
                          }}
                        >
                          Technologies
                        </button>
                        <button
                          className={isActive ? "activeBtn" : null}
                          onClick={() => {
                            setActivateCompanyDetails("projects");
                            setActive(!isActive);
                          }}
                        >
                          Projects
                        </button>
                      </div>
                      <div
                        className="responsibilities_section"
                        style={{
                          display:
                            activatecompanyDetails === "responsibilities"
                              ? "block"
                              : "none",
                        }}
                      >
                        <div className="technologyDetails">
                          {synpulseTechnologyStack.map(({path, name}) => (
                            <div className="tech">
                              <img src={path} alt="" />
                              <h4>{name}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="compnayProjects"
                      style={{
                        display:
                          activatecompanyDetails === "projects"
                            ? "flex"
                            : "none",
                      }}
                      >
                        <div className="project">
                          <img src="../Assest/companyProjects/ACPI.png" alt="" />
                          <h4>Aligned Capital Partners</h4>
                          <br/>
                          <div className="projectTech">
                            <span>AWS</span><span>React JS</span><span>JAVA</span>
                            <span>ANT Design</span><span>ZOHO</span><span>postgreSQL</span>
                          </div>
                          <br />
                          <p>Developed Financial advisory platform for client's advisors.
                            There are total 13 different functionalities to perform by advisors to maintain client's
                            accounts. And, my team has developed those 13 workflows, including QA and UAT of each workflows.
                          </p>
                        </div>
                        <div className="project">
                          <img src="../Assest/companyProjects/thoughtMachine.png" alt="" />
                          <h4>Thought Machine</h4>
                          <br/>
                          <div className="projectTech">
                            <span>AWS</span><span>Hashicorp Vault</span><span>Terraform</span>
                            <span>Docker</span><span>Kubernetes</span>
                          </div>
                          <br />
                          <p>
                            Setup the thought machine vault instance on AWS using EC2, EKS, RDS,
                            VPC, Python, S3 Buckets. Run docker images on EKS cluster to configure
                            vault environment. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="selectedDetails"
                  style={{
                    display: activecompony === "blackBerry" ? "block" : "none",
                  }}
                >
                  <div className="detailHeader">
                    <img src="../Assest/componylogo/blackberry.png" alt="" />
                    <div>
                      <h3>Blackberry Technologies</h3>
                      <span>(ontario, canada)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Software Developer Intern (Jan 2022 - April 2022)</h3>
                    <p>
                      I was working as a software developer intern in
                      Blackberry. My responsibilities are to implementing
                      functionalities in existing system, create test cases and
                      solve defects.
                    </p>
                  </div>
                </div>
                <div
                  className="selectedDetails"
                  style={{
                    display: activecompony === "getway" ? "block" : "none",
                  }}
                >
                  <div className="detailHeader">
                    <img src="../Assest/componylogo/getway.jpg" alt="" />
                    <div>
                      <h3>Gatway Techno Labs</h3>
                      <span>(Ahmedabad, India)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Software Developer (Jan 2019 - Jan 2020)</h3>
                    <p>
                      I wroked around one year as a software developer at
                      Gateway Techno Labs. Technologies back in India, working
                      on critical projects for their clients. I had the
                      opportunity to develop website named AutoDap in agile
                      methodology using different technologies like Angular JS,
                      Node JS, including CSS/CSS3 and HTML5.
                    </p>
                  </div>
                </div>
                <div
                  className="selectedDetails"
                  style={{
                    display: activecompony === "brainBeam" ? "block" : "none",
                  }}
                >
                  <div className="detailHeader">
                    <img src="../Assest/componylogo/bbt.png" alt="" />
                    <div>
                      <h3>BrainyBeam Technologies </h3>
                      <span>(Ahmedabad, India)</span>
                    </div>
                  </div>
                  <div className="detailBody">
                    <h3>Salesforce Developer - Intern (May 2018 - Dec 2018)</h3>
                    <p>
                      I was a salesforce developer (Intern) at Brainy Beam
                      Technology, where I have worked on salesforce
                      applications. My responsibilities were to assist a data
                      project team, develop customized solutions within a
                      salesforce platform, and design, code, and implement
                      salesforce applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="selectBox selectBox1">
                <div className="clgBox expBox">
                  <img src="../Assest/componylogo/synpulse.jpg" alt="" />
                  <h3>Synpulse</h3>
                  <div className="contactBtns">
                    <Link to="compony_details" spy={true} smooth={true}>
                      <button
                        className="perpuleBtn"
                        onClick={() => handlecompony("synpulse")}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="clgBox expBox">
                  <img src="../Assest/componylogo/blackberry.png" alt="" />
                  <h3>Blackberry Technologies</h3>
                  <div className="contactBtns">
                    <Link to="compony_details" spy={true} smooth={true}>
                      <button
                        className="perpuleBtn"
                        onClick={() => handlecompony("blackBerry")}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="clgBox expBox">
                  <img src="../Assest/componylogo/getway.jpg" alt="" />
                  <h3>Gatway Techno Labs</h3>
                  <div className="contactBtns">
                    <Link to="compony_details" spy={true} smooth={true}>
                      <button
                        className="perpuleBtn"
                        onClick={() => handlecompony("getway")}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="clgBox expBox">
                  <img src="../Assest/componylogo/bbt.png" alt="" />
                  <h3>BrainyBeam Technologies</h3>
                  <div className="contactBtns">
                    <Link to="compony_details" spy={true} smooth={true}>
                      <button
                        className="perpuleBtn"
                        onClick={() => handlecompony("brainBeam")}
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Portfolio">
          <div className="container">
            <div className="MainTitle project_clones">
              <span>my projects</span>
              <div className="option">
                <button
                  className={isActive ? null : "activeBtn"}
                  onClick={handleprojects}
                >
                  Projects
                </button>
                <button
                  className={isActive ? "activeBtn" : null}
                  onClick={handleclones}
                >
                  Clones
                </button>
              </div>
            </div>
            <div className="projectt">
              <div
                className="project-box"
                style={{
                  display: projects ? "flex" : "none",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  flexWrap: "wrap",
                }}
              >
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p1.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>MyCoVTest Hub (2021)</h4>
                      <p>
                        MyCoVTest Hub is to help collect the test results and to
                        provide an accurate picture of the local cases,
                        including more detailed demographics, as well as a
                        regional breakdown by postcode.
                      </p>
                      <span>
                        <b>Technologies :</b> JAVA, JSP, SERVLET, MYSQL
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img
                      src="../Assest/projects/BankingApp.gif"
                      alt="Portfolio Item"
                    />
                    <figcaption>
                      <h4>Online Banking Application (2021)</h4>
                      <p>
                        BOA is online banking app, throgh we can manage our bank
                        account including deposite, Transfer fund, Bill Payment,
                        Open new account, Statement etc.
                      </p>
                      <span>
                        <b>Technologies :</b> JAVA, Spring, Maven, MYSQL
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/BankingSystem"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/HR.gif" alt="Portfolio Item" />
                    <figcaption>
                      <h4>HR Requisition (2019)</h4>
                      <p>
                        HR Requisition is online HR management system. User can
                        be a candidate, staff or an organization. Candidate can
                        apply on open positions, manage profile and can appear
                        for online exams as well. Staff can add jobs, add exams,
                        add candidates, etc. An organization can add staff,
                        manage staff and create new openings.{" "}
                      </p>
                      <span>
                        <b>Technologies :</b> C#, ASP.NET, HTML, CSS, JavaScript
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/HRRequisition"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p2.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Cars Here (2020)</h4>
                      <p>
                        Basically, Cars here is a website which allow user to
                        rent or excahnge a car with other users. Also, real time
                        feedback and car's information.
                      </p>
                      <span>
                        <b>Technologies :</b> HTML, CSS, JavaScript
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p3.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Shoppy (2020)</h4>
                      <p>
                        Shoppy is a Android application where users can see
                        different brands of shoes and they can buy the shoes of
                        their own choice.
                      </p>
                      <span>
                        <b>Technologies :</b> Android, Java, Firebase
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p4.png" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Cake Shop (2019)</h4>
                      <p>
                        The cake shop is an online cake shopping site, and users
                        can modify cakes according to their requirements; an
                        online payment and delivery tracking system is there for
                        user flexibility.
                      </p>
                      <span>
                        <b>Technologies :</b> JAVA, JSP, MYSQL, Servlet
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p5.gif" alt="Portfolio Item" />
                    <figcaption>
                      <h4>Snapkart Portfolio (2017)</h4>
                      <p>
                        A web application where users can join and share their
                        portfolio with advertising agencies for photoshoot
                        selection.
                      </p>
                      <span>
                        <b>Technologies :</b> JAVA, JSP, Servlet, MySQL
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img src="../Assest/projects/p6.gif" alt="Portfolio Item" />
                    <figcaption>
                      <h4>BELL BOY (2021)</h4>
                      <p>
                        Bell Boy is a Android Application where Users can view
                        and book the Hotels of their own choice.
                      </p>
                      <span>
                        <b>Technologies :</b> Android, Java, Firebase
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
                <div className="projects">
                  <figure>
                    <img
                      src="../Assest/projects/SMS.gif"
                      alt="Portfolio Item"
                    />
                    <figcaption>
                      <h4>Stock Management System (2021)</h4>
                      <p>
                        User can manage the stock, can buy and make payment.
                        Admin can manage users and stocks.
                      </p>
                      <span>
                        <b>Technologies :</b> C#, Asp.Net, HTML, CSS
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/StockManagementSystem"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div
                style={{
                  display: projects ? "none" : "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div className="clones">
                  <figure>
                    <img
                      src="../Assest/projects/tinder-clone.gif"
                      alt="Portfolio Item"
                    />
                    <figcaption>
                      <h4>Tinder Clone</h4>
                      <p>
                        {" "}
                        I have made tinder clone. I used React JS for
                        client-side and used Node.JS for server side. MongoDB
                        has been used for store the data and deployed side
                        through firebase.
                      </p>
                      <span>
                        <b>Technologies :</b> React.JS, Node.JS, MongoDB,
                        Firebase
                      </span>
                      <div className="buttondiv">
                        <a
                          href="https://github.com/JemishViradiya/MyCovTestHub"
                          className="Learn_More"
                        >
                          Learn More
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Contact" ref={myref}>
          <div className="container">
            <div className="MainTitle">
              <span>get in touch</span>
            </div>
            <div className="touch-row">
              <div className="address">
                <div className="address-box">
                  <span>
                    <i className="fas fa-phone"></i>
                  </span>
                  <p>(437) 772-7878</p>
                </div>
                <div className="address-box">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <address>
                    35 Fountainhead Road <br />
                    North York, ON, M3J 2V7 <br />
                    CANADA
                  </address>
                </div>
                <div className="address-box">
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p>jemishviradiya9@gmail.com</p>
                </div>
                <div className="address-box">
                  <ul>
                    <li>
                      <a href="https://twitter.com/VJemish">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/jemish.viradiya.54/">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/JemishViradiya">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jemishviradiya9/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/jemish-viradiya-63aa2a146/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact-me">
                <input type="text" placeholder="Enter Name" />
                <input type="text" placeholder="Enter Email" />
                <textarea placeholder="Enter Message"></textarea>
                <div className="contactBtns">
                  <button className="perpuleBtn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};
