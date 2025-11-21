const Footer = () => {
  return (
    <footer className="bg-tech-dark border-t border-tech-blue/20 mt-auto">
      <div className="tech-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent mb-2">
              CTRL
            </h3>
            <p className="text-gray-400 text-sm">
              Coalition of Tech Representatives and Leadership
            </p>
            <p className="text-gray-400 text-sm">
              San Diego State University
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CTRL. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Building the future of tech leadership
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
