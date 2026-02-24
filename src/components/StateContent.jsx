import React from 'react'

const STATE_CONTENT = {
  al: (
    <>
      <h5>Alabama Resources</h5>
      <ul>
        <li><a href="https://adol.alabama.gov/career-centers/" target="_blank" rel="noreferrer">Alabama Career Center</a>: Network of physical centers offering resume help, job counseling, and interview facilities.</li>
        <li><a href="https://alabamaworks.alabama.gov/vosnet/Default.aspx" target="_blank" rel="noreferrer">AlabamaWorks</a>: Workforce training, placement, and informational resources.</li>
        <li><a href="https://personnel.alabama.gov/" target="_blank" rel="noreferrer">Alabama State Personnel Department</a>: State government job listings.</li>
        <li><a href="https://adol.alabama.gov/" target="_blank" rel="noreferrer">Alabama Department of Labor</a>: Labor market info and local career center assistance.</li>
        <li><a href="https://www.accs.edu/ace/" target="_blank" rel="noreferrer">Alabama Community College System</a>: Training and workforce development programs.</li>
        <li><a href="https://www.aidt.edu/" target="_blank" rel="noreferrer">AIDT</a>: Workforce training programs for Alabama industries.</li>
      </ul>
    </>
  ),

  ak: (
    <>
      <h5>Alaska Resources</h5>
      <ul>
        <li><a href="https://jobs.alaska.gov/" target="_blank" rel="noreferrer">Alaska Job Center Network</a>: Online portal and in-person support for resumes and applications.</li>
        <li><a href="https://labor.alaska.gov/" target="_blank" rel="noreferrer">Alaska Department of Labor</a>: Training programs and apprenticeship information.</li>
        <li><a href="https://www.governmentjobs.com/careers/alaska" target="_blank" rel="noreferrer">AlaskaJobs</a>: State hiring platform.</li>
        <li><a href="https://avtec.edu/" target="_blank" rel="noreferrer">AVTEC</a>: Vocational training and technical programs.</li>
      </ul>
    </>
  ),

  az: (
    <>
      <h5>Arizona Resources</h5>
      <ul>
        <li><a href="https://www.azjobconnection.gov/job_seeker/" target="_blank" rel="noreferrer">ARIZONA@WORK / AZ Job Connection</a>: Job search, resumes, career counselors, training and apprenticeship programs.</li>
        <li><a href="https://pipelineaz.com/" target="_blank" rel="noreferrer">Pipeline AZ</a>: Explore job openings by industry and training programs.</li>
        <li><a href="https://des.az.gov/wia" target="_blank" rel="noreferrer">Arizona Department of Economic Security (WIOA)</a>: Funding and support for training and job search assistance.</li>
      </ul>
    </>
  ),

  ar: (
    <>
      <h5>Arkansas Resources</h5>
      <ul>
        <li><a href="https://dws.arkansas.gov/workforce-services/job-seekers/" target="_blank" rel="noreferrer">Arkansas Division of Workforce Services</a>: Locate local Workforce Centers for job search assistance and training.</li>
        <li><a href="https://dws.arkansas.gov/workforce-services/arkansas-workforce-centers/" target="_blank" rel="noreferrer">Arkansas Workforce Centers</a>: In-person services for resumes, interview prep, and training referrals.</li>
        <li><a href="https://www.arjoblink.arkansas.gov/job_seeker" target="_blank" rel="noreferrer">Arkansas JobLink</a>: Official online job-matching system.</li>
        <li><a href="https://dws.arkansas.gov/workforce-services/wioa/" target="_blank" rel="noreferrer">WIOA – Arkansas</a>: Funding for occupational training and apprenticeships.</li>
        <li><a href="https://dws.arkansas.gov/workforce-services/job-seekers/reemployment-services/" target="_blank" rel="noreferrer">Reemployment Services (RESEA)</a>: One-on-one support for those collecting UI.</li>
        <li><a href="https://dws.arkansas.gov/unemployment/" target="_blank" rel="noreferrer">Arkansas Unemployment Insurance</a>: Portal for filing claims.</li>
        <li><a href="https://www.discover.arkansas.gov/Data-Search-Tool/index" target="_blank" rel="noreferrer">Discover Arkansas – Labor Market Data</a>: Labor market information and projections.</li>
        <li><a href="https://commerce.arkansas.gov/divisions/workforce-policy-innovation/" target="_blank" rel="noreferrer">Workforce Policy & Innovation</a>: State workforce strategy and training alignment.</li>
      </ul>
    </>
  ),

  ca: (
    <>
      <h5>California Resources</h5>
      <ul>
        <li><a href="https://edd.ca.gov/en/jobs_and_training/" target="_blank" rel="noreferrer">EDD — Jobs & Training</a>: America’s Job Center of California (AJCC) network, job search help and training referrals.</li>
        <li><a href="https://www.caljobs.ca.gov/" target="_blank" rel="noreferrer">CalJOBS</a>: California's online job-matching system.</li>
        <li><a href="https://cwdb.ca.gov/local_boards/find_your_local_board/" target="_blank" rel="noreferrer">AJCC / Local Workforce Centers</a>: In-person career services and training referrals.</li>
        <li><a href="https://cwdb.ca.gov/" target="_blank" rel="noreferrer">California Workforce Development Board (CWDB)</a>: State workforce policy and programs.</li>
        <li><a href="https://edd.ca.gov/en/jobs_and_training/workforce_Innovation_and_opportunity_act" target="_blank" rel="noreferrer">WIOA — California</a>: Funding and support for training and employment services.</li>
        <li><a href="https://edd.ca.gov/en/jobs_and_training/Resources_for_Job_Seekers/" target="_blank" rel="noreferrer">Training Resources for Job Seekers</a>: Free or low-cost training options and Eligible Training Provider List.</li>
        <li><a href="https://edd.ca.gov/en/jobs_and_training/Job_Fairs_and_Workshops/" target="_blank" rel="noreferrer">Job Fairs & Workshops</a>: EDD hosted events and workshops.</li>
        <li><a href="https://edd.ca.gov/en/jobs_and_training/stu-training-catalog/" target="_blank" rel="noreferrer">Statewide Training Unit (STU) Catalog</a>: Catalog of free training programs.</li>
        <li><a href="https://www.ccc.ca.gov/" target="_blank" rel="noreferrer">California Conservation Corps</a>: Paid work experience and pathways for young adults.</li>
      </ul>
    </>
  ),

  co: (
    <>
      <h5>Colorado Resources</h5>
      <ul>
        <li><a href="https://cdle.colorado.gov/jobs-training/connecting-colorado" target="_blank" rel="noreferrer">Connecting Colorado</a>: Primary online platform for job seekers and training.</li>
        <li><a href="https://cdle.colorado.gov/jobs-training/workforce-centers" target="_blank" rel="noreferrer">Colorado Workforce Centers</a>: One-stop centers offering free career services.</li>
      </ul>
    </>
  ),
}

export default function StateContent({ abbr }) {
  const content = STATE_CONTENT[abbr] || (
    <>
      <h5>No resources yet</h5>
      <p className="small text-muted">You can add local workforce centers, training links, and contact info for this state.</p>
    </>
  )

  return <div>{content}</div>
}
