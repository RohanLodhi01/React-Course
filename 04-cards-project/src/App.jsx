import Card from './components/Card'
const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "55/hour", // dollars per hour
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "72/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag: "Contract",
      tag2: "Mid Level",
      pay: "60/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: "65/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag: "Part Time",
      tag2: "Senior Level",
      pay: "80/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Full Stack Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: "90/hour",
      location: "Remote"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: "85/hour",
      location: "Fremont, USA"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: "100/hour",
      location: "Bengaluru, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName}
            post={elem.post}
            brandLogo={elem.brandLogo}
            pay={elem.pay}
            tag1={elem.tag}
            tag2={elem.tag2}
            location={elem.location}
            datePosted={elem.datePosted}
          />
        </div>
      })}
    </div>
  )
}

export default App
