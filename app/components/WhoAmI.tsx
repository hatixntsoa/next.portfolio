const WhoAmI = () => {
  return (
    <>
      <div className="command-line">   ~ whoami </div>
      <br />
      <p className="text-xl leading-[1.6]">
        Hello, I&apos;m <span className="highlight">Hatix Ntsoa</span>,
        a <span className="highlight">software developer</span>
        specializing <br /> in <span style={{ fontWeight: 'bold' }}>Python</span>,
        web development, and <span className="highlight">open-source</span> projects.
        <br /><br />
        I am a passionate <span className="highlight">cybersecurity</span> enthusiast
        with a focused aspiration to become a <span className="highlight">DevSecOps</span> professional.
      </p>
      <br /> <br />
    </>
  );
};

export default WhoAmI;