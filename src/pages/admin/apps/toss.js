import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const Toss = () => {
  const [angle, setAngle] = useState(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h2>Toss</h2>
        <section>
          <article
            className="tosscoin"
            onClick={flipCoin}
            style={{
              transform: `rotateY(${angle}deg)`,
            }}
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;