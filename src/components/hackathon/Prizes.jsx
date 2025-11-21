const Prizes = () => {
  const prizes = [
    {
      title: "Sony WH1000-XM5 Premium Headphones",
      photo: "https://m.media-amazon.com/images/I/51aXvjzcukL.jpg",
      value: "$300",
    },
    {
      title: "San Diego VR Experience for 4",
      photo: "https://www.sandiegovr.com/_next/image?url=%2Flogo-light.png&w=1080&q=75",
      value: "$250",
    },
    {
      title: "Apple Watch",
      photo: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYG03ref_FV98_VW_34FR+watch-case-44-aluminum-midnight-nc-se3_VW_34FR+watch-face-44-aluminum-midnight-se3_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=OUh6OFdFVEJxVkF6SUo5TWxpTE50MG5TeWJ6QW43NUFnQ2V4cmRFc1VnWWxvMTNVeXVWaTk0Ui9PSEVKVVU0d1lhaWUxTWU2aU04eE1hTy9TdWx3bWRGNnlaeXQ4NGFKQTAzc0NGeHR2aVovaXdUUWpjcUxCU0VQMFk3TFQ4aVV3MWtUbEY3SEFHcklpYWRuOHA5UEEveDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMlpHNW80UjJWZzYxTVdqVTNBWWxkVHoxUSt3MXdXOU45RlVNNm9vaUhPUw",
      value: "$250",
    },
    {
      title: "DJI Neo Drone",
      photo: "https://macstarcamera.com/wp-content/uploads/2024/09/1725526207_IMG_2316075.jpg",
      value: "$200",
    },
  ];

  return (
    <section id="prizes" className="tech-section bg-tech-dark">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-8">Prizes</h2>
        
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl text-gray-300 mb-4">
            Participants who develop innovative, creative, high-impact projects, will have the chance to win exciting prizes!
          </p>
          <p className="text-lg text-gray-400 italic">
            Participants in the top three teams will get to choose from a pool of 12 prizes, including but not limited to those below.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className="tech-card flex flex-col items-center text-center border-2 border-tech-blue hover:border-tech-purple transition-colors"
            >
              <img 
                src={prize.photo} 
                alt={prize.title}
                className="h-32 lg:h-40 w-auto object-contain mb-4 rounded-xl"
              />
              <p className="text-lg font-bold text-tech-blue">
                {prize.title}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
          There will also be opportunities for additional prizes and giveaways throughout the event!
        </p>
      </div>
    </section>
  );
};

export default Prizes;
