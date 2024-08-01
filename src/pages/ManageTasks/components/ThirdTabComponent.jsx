import React, { useState } from "react";
import TableWithBtns from "../../../Tables/TableWithBtns";
import { Rating } from "@mui/material";
import ActionIcons from "./thirdUtils/ActionIcons";
import RateModal from "./thirdUtils/RateModal";
import ReturnTaskModal from "./thirdUtils/ReturnTaskModal";
import ViewTaskModal from "./thirdUtils/ViewTaskModal";

const ThirdTapComponent = () => {
  const [openModal, setOpenModal] = useState(null);
  const [rating, setRating] = useState(4); // Initial rating

  const handleOpenModal = (type) => setOpenModal(type);
  const handleCloseModal = () => setOpenModal(null);

  // Function to handle rating update
  const handleRatingUpdate = (newRating) => {
    setRating(newRating);
    handleCloseModal(); // Close the modal after updating
  };

  return (
    <TableWithBtns
      className="gap-3 mt-10"
      title="جدول المهام"
      titleClass="pr-10"
    >
      {/* Table content goes here */}
      <thead className="table-font text-primary text-gray-900 uppercase dark:text-gray-400 title-table-font">
        <tr>
          <th scope="col" className="px-6 py-3">
            <input type="checkbox" name="" onChange={() => {}} />
          </th>
          <th scope="col" className="px-6 py-3">
            العنوان
          </th>
          <th scope="col" className="px-6 py-3">
            الاهمية
          </th>
          <th scope="col" className="px-6 py-3">
            موعد التسليم
          </th>
          <th scope="col" className="px-6 py-3">
            الاجراءات
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-6 py-4">
            <input type="checkbox" onChange={() => {}} />
          </td>
          <td className="px-6 py-4">تحليل البيانات</td>
          <td className="px-6 py-4">مهمة مستعجلة</td>
          <td className="px-6 py-4">21-5-2024</td>
          <td className="px-6 py-4">
            <div className="actions-container">
              <ActionIcons handleOpenModal={handleOpenModal} />
              <Rating
                name="read-only-rating"
                value={rating}
                readOnly
                size="small" // Adjust the size of the stars
                sx={{
                  direction: "ltr", // Ensure the stars are displayed LTR
                  "& .MuiRating-iconFilled": { color: "#ffb400" },
                  "& .MuiRating-iconEmpty": { color: "#ccc" },
                }}
              />
            </div>
          </td>
        </tr>
      </tbody>

      <RateModal
        show={openModal === "rate"}
        onClose={handleCloseModal}
        onRatingUpdate={handleRatingUpdate} // Pass the update function
      />
      <ReturnTaskModal
        show={openModal === "return"}
        onClose={handleCloseModal}
      />
      <ViewTaskModal show={openModal === "view"} onClose={handleCloseModal} />
    </TableWithBtns>
  );
};

export default ThirdTapComponent;
