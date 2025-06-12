import React from "react";
import Card from "./Card";

const Hospitals = () => {
  const hospitalsList = [
  { name: "Grady Health System - Asa G Yancey Health Center", address: "1247 Donald Lee Hollowell Pkwy, Atlanta, GA - 30318", phone: "(404) 616-2265", cost: "Sliding Scale" },
  { name: "Grady Health System - Grady Memorial Hospital", address: "80 Jesse Hill Jr Dr SE, Atlanta, GA - 30303", phone: "(404) 616-1000", cost: "Sliding Scale" },
  { name: "Mercy Clinic North", address: "3367 Buford Hwy N.E. Ste 910, Atlanta, GA - 30329", phone: "(678) 843-8700", cost: "Sliding Scale" },
  { name: "Shifa Free Clinic - Duluth", address: "3650 Savannah Place Drive, Duluth, GA - 30096", phone: "(770) 300-0067", cost: "Free" },
  { name: "East DeKalb Health Center - Dekalb County Public Health Department", address: "2277 S. Stone Mountain Lithonia Rd, Lithonia, GA - 30058", phone: "(770) 484-2600", cost: "Sliding Scale" },
  { name: "Good Samaritan Health Center", address: "1015 Donald Lee Hollowell Pkwy NW, Atlanta, GA - 30318", phone: "(404) 523-6571", cost: "Sliding Scale" },
  { name: "Mercy Care at Gateway Center", address: "275 Pryor St SW, Atlanta, GA - 30303", phone: "(678) 843-8600", cost: "Free" },
  { name: "Mercy Care at Atlanta Day Shelter for Women and Children", address: "655 Ethel Street NW, Atlanta, GA - 30318", phone: "(404) 876-2894", cost: "Free" },
  { name: "Southside Medical Center - Main Location", address: "1046 Ridge Ave SW, Atlanta, GA - 30315", phone: "(404) 688-1350", cost: "Sliding Scale" },
  { name: "Georgia Health Department - Lawrenceville Health Center", address: "455 Grayson Hwy, Suite 300, Lawrenceville, GA - 30046", phone: "(770) 339-4283", cost: "Sliding Scale" },
  { name: "Georgia Health Department - Buford Health Center", address: "2755 Sawnee Ave, Buford, GA - 30518", phone: "(770) 614-2401", cost: "Sliding Scale" },
  { name: "Grant Park Clinic", address: "1340 Boulevard SE, Atlanta, GA - 30315", phone: "(404) 627-4259", cost: "Sliding Scale" }
];

  return (
    <div className="hospitals">
      {hospitalsList.map((hospital, index) => (
        <Card key={index} {...hospital} />
      ))}
    </div>
  );
};

export default Hospitals;