   function About() {
  return (
    <div>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
        This is a   
        <a href='https://github.com/Mohd-muneer/github-finder'>
          {' '}
          React Project 
        </a>{' '}
          by
        <strong>
          <a href='https://github.com/Mohd-muneer'> Mohd Muneer Uddin</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By: 
        <a className='text-white' href='https://www.linkedin.com/in/mohd-muneer-uddin-66b067207'>
           Mohd Muneer Uddin 
        </a>
      </p>
    </div>
  )
}

export default About