document.addEventListener("DOMContentLoaded", function () {
  // --- DATA: In a real application, this would come from a server/API ---
  const jobsData = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Bengaluru",
      description:
        "We are seeking an experienced Frontend Developer proficient in React and modern JavaScript frameworks to build high-quality user interfaces.",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds LLC",
      location: "Pune",
      description:
        "A creative UI/UX designer needed to craft beautiful and intuitive user experiences for our mobile and web applications.",
      type: "Full-time",
      posted: "5 days ago",
    },
    {
      title: "Backend Java Developer",
      company: "Innovate Systems",
      location: "Hyderabad",
      description:
        "Join our backend team to develop robust and scalable services using Java, Spring Boot, and microservices architecture.",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      title: "Digital Marketing Specialist",
      company: "MarketBoost",
      location: "Mumbai",
      description:
        "Drive our digital marketing campaigns across various channels including SEO, SEM, and social media to increase brand awareness.",
      type: "Contract",
      posted: "3 days ago",
    },
    {
      title: "Data Scientist",
      company: "Data Insights Corp",
      location: "Bengaluru",
      description:
        "Analyze large datasets to extract meaningful insights and build predictive models using Python, R, and machine learning techniques.",
      type: "Full-time",
      posted: "10 days ago",
    },
    {
      title: "Cloud Engineer (AWS)",
      company: "SkyHigh Cloud Services",
      location: "Pune",
      description:
        "Manage and optimize our AWS cloud infrastructure, ensuring reliability, security, and scalability of our services.",
      type: "Full-time",
      posted: "4 days ago",
    },
    {
      title: "Project Manager",
      company: "Tech Solutions Inc.",
      location: "Mumbai",
      description:
        "Lead software development projects from conception to launch, coordinating with cross-functional teams to deliver on time.",
      type: "Full-time",
      posted: "6 days ago",
    },
    {
      title: "Content Writer (Tech)",
      company: "Creative Minds LLC",
      location: "Remote",
      description:
        "Create engaging and informative technical content, including blogs, whitepapers, and documentation for our software products.",
      type: "Part-time",
      posted: "8 days ago",
    },
  ];

  // --- DOM Elements ---
  const listingsContainer = document.getElementById("job-listings-container");
  const noResultsDiv = document.getElementById("no-results");
  const searchForm = document.getElementById("search-form");
  const keywordsInput = document.getElementById("keywords-input");
  const locationInput = document.getElementById("location-input");
  const companyInput = document.getElementById("company-input");

  // --- FUNCTIONS ---

  /**
   * Renders the job listings to the page based on an array of job objects.
   * @param {Array} jobs - The array of job objects to display.
   */
  const displayJobs = (jobs) => {
    listingsContainer.innerHTML = ""; // Clear existing listings

    if (jobs.length === 0) {
      noResultsDiv.style.display = "block"; // Show 'no results' message
    } else {
      noResultsDiv.style.display = "none"; // Hide 'no results' message
      jobs.forEach((job) => {
        const jobCard = `
                            <div class="col-lg-6 mb-4">
                                <div class="card job-card h-100">
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">${job.title}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
                                        <p class="card-text text-muted">
                                            <i class="fas fa-map-marker-alt me-1"></i>${job.location}
                                        </p>
                                        <p class="card-text flex-grow-1">${job.description}</p>
                                        <div class="mt-3">
                                            <span class="badge rounded-pill text-bg-primary job-tag">${job.type}</span>
                                            <span class="badge rounded-pill text-bg-secondary job-tag">Posted: ${job.posted}</span>
                                        </div>
                                        <a href="#" class="btn btn-success mt-4 align-self-start">View & Apply</a>
                                    </div>
                                </div>
                            </div>
                        `;
        listingsContainer.innerHTML += jobCard;
      });
    }
  };

  /**
   * Filters the jobs based on user input and calls displayJobs to update the UI.
   */
  const filterJobs = () => {
    const keywords = keywordsInput.value.toLowerCase();
    const location = locationInput.value.toLowerCase();
    const company = companyInput.value.toLowerCase();

    const filteredJobs = jobsData.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(keywords);
      const descriptionMatch = job.description.toLowerCase().includes(keywords);
      const locationMatch = job.location.toLowerCase().includes(location);
      const companyMatch = job.company.toLowerCase().includes(company);

      return (titleMatch || descriptionMatch) && locationMatch && companyMatch;
    });

    displayJobs(filteredJobs);
  };

  // --- EVENT LISTENERS ---

  // Prevent form submission and filter
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filterJobs();
  });

  // Live filtering as user types
  [keywordsInput, locationInput, companyInput].forEach((input) => {
    input.addEventListener("keyup", filterJobs);
  });

  // --- INITIAL LOAD ---
  displayJobs(jobsData); // Display all jobs initially
});
