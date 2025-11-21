const Logistics = () => {
  return (
    <section id="logistics" className="tech-section">
      <div className="tech-container">
        <h2 className="tech-subheading text-center mb-12">Event Logistics</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Location */}
          <div className="tech-card border-2 border-tech-blue">
            <h3 className="text-2xl font-bold text-tech-blue mb-4">
              Location: Montezuma Hall, Aztec Student Union
            </h3>
            <p className="text-lg text-gray-300 italic mb-4">
              Saturday, November 15 - Sunday, November 16, 2025, 9:00 AM - 7:00 PM both days
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                Park in <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/ofPNuC5knpqCbs7Z8" 
                  className="text-tech-blue hover:underline"
                >
                  Parking Lot 4
                </a> if you are driving to campus.
              </li>
              <li>
                Take the stairs or elevators to Montezuma Hall on the second floor of the Aztec Student Union.
              </li>
              <li>
                Familiarize yourself with the <a 
                  href="/CTRLHackathonScheduleNov2025.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tech-blue hover:underline"
                >
                  Printable Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Food */}
          <div className="tech-card">
            <h3 className="text-xl font-bold text-tech-blue mb-3">Food & Drinks</h3>
            <p className="text-gray-300 mb-4">
              Complimentary food, drinks, and snacks will be provided throughout the event. See the{' '}
              <a 
                href="/CTRLHackathonScheduleNov2025.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-tech-blue hover:underline"
              >
                Printable Schedule
              </a> for more details.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Breakfast: Einstein Bros. Bagels, Coffee (9:00am both days)</li>
              <li>Lunch: Costco Pizza (1:00pm both days)</li>
              <li>Snacks: Chips, Fruit Snacks (available all day)</li>
              <li>Drinks: Bottled Water, Soda (available all day)</li>
            </ul>
          </div>

          {/* Big Data Policy */}
          <div className="tech-card bg-tech-dark">
            <h3 className="text-xl font-bold text-tech-purple mb-3">Competing in Both Hackathons?</h3>
            <p className="text-gray-300 mb-3">Policy for Dual Participants:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>You may participate in both this hackathon and the Big Data Hackathon.</li>
              <li>If you need to step out for Big Data Hackathon activities, please notify an organizer in advance.</li>
              <li>You are still expected to attend the opening, demo, and judging sessions for this event.</li>
              <li>Your project for each hackathon must be distinct and not submitted to both events.</li>
              <li>If you have a scheduling conflict, contact staff as soon as possible so we can help coordinate.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
