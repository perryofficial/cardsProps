import React from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://imagepng.org/wp-content/uploads/2019/08/google-icon.png",
    companyName: "Google",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "8 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Noida, India"
  }
];



  return (
    <div className='parent'>
      {jobOpenings.map(function(props,idx){
        return <div key={idx}>
           <Card company={props.companyName} post={props.post} logo={props.brandLogo} date={props.datePosted} tag1={props.tag1} tag2={props.tag2} pay={props.pay} location={props.location}/>
        </div>
      })}
    </div>
  )
}

export default App