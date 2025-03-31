import React from 'react';
import { Link } from 'react-router-dom';

const CVBuddy = () => {
  return (
    <div className="main-container d-flex flex-column justify-content-between">
      <div className="cv-list-section container py-3">
        <div className="row">
          <h1 className="col-12">CV Templates</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <Link className="btn btn-primary iits-cv-btn" to="/cv/iitkgp">
              Template-1
            </Link>
          </div>
          <div className="col-4">
            <Link className="btn btn-primary iits-cv-btn" to="/cv/iitm">
              Template-2
            </Link>
          </div>
          <div className="col-4">
            <Link className="btn btn-primary iits-cv-btn" to="/cv/iitb">
              Template-3
            </Link>
          </div>
        </div>
      </div>
      
      <div className="form-section container">
        <h1 className="section-heading">Contribute your part, by filling this feedback form</h1>
        <form id="feedback-form" className="needs-validation">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name">Name (optional)</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="mobile">Mobile Number (optional)</label>
              <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Enter mobile number" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email (optional)</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter subject" required />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label htmlFor="message">Feedback</label>
              <textarea 
                className="form-control" 
                id="message" 
                name="message" 
                rows={6}
                placeholder="How useful is this platform for you? Do you want more CV templates to be added here? What are the changes you want to see in the future updates? Did you find any bugs? or have faced any issue while using the cv templates?"
                required 
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>

      <div className="footer d-flex flex-column text-center mt-4">
        <div>Made with ❤️ by <a href="https://github.com/Praneeth-rdy">praneeth-rdy</a></div>
        <div className="social-icons-container my-3">
          <a href="https://www.facebook.com/praneeth.reddy.3557440">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/praneeth__rdy/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/praneeth-/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:praneeth.kolanu.iitkgp@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVBuddy; 