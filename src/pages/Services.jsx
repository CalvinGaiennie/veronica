import ContactForm from "../components/ContactForm";
import Nav from "../components/nav";

function Services() {
  return (
    <div>
      <Nav />
      <div className="container py-5">
        <h1 className="text-center mb-5">Services</h1>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card mb-4 p-4">
              <h2 className="mb-3">Per-Event Styling Consultation</h2>
              <div className="px-3">
                <p>
                  Initial 1-on-1 meeting to discuss the event, personal style,
                  and wardrobe needs.
                </p>
                <p>
                  Assistance with selecting or shopping for outfits (virtual or
                  in-person).
                </p>
                <p>
                  Suggestions for accessories, shoes and other finishing
                  touches.
                </p>
              </div>
            </div>

            <div className="card mb-4 p-4">
              <h2 className="mb-3">Day of Styling Assistance</h2>
              <div className="px-3">
                <p>
                  On-site support to ensure the client is dressed and styled
                  perfectly.
                </p>
                <p>
                  Minor tailoring adjustments (e.g. garment steaming, pinning,
                  or taping).
                </p>
                <p>
                  Coordination with makeup artists, hair stylists, and
                  photographers as needed.
                </p>
              </div>
            </div>

            <div className="card mb-4 p-4">
              <h2 className="mb-3">Portable Styling Kit Gift</h2>
              <div className="px-3">
                <p>
                  A complimentary kit for each client containing emergency
                  fashion essentials, such as:
                </p>
                <ul className="list-group list-group-flush ms-4">
                  <li className="list-group-item border-0">
                    • Double-sided tape
                  </li>
                  <li className="list-group-item border-0">
                    • Mini sewing kit
                  </li>
                  <li className="list-group-item border-0">
                    • Stain remover pen
                  </li>
                  <li className="list-group-item border-0">• Compact mirror</li>
                  <li className="list-group-item border-0">
                    • Mini perfume or cologne
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-5 p-4">
              <h2 className="mb-3">VIP Subscription Option</h2>
              <div className="px-3">
                <p>
                  Monthly or quarterly memberships for repeat clients, offering
                  benefits like priority booking, exclusive discounts, and
                  access to trend updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
