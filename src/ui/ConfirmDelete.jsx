import { HiOutlineExclamationTriangle } from "react-icons/hi2";

function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div className="confirm-delete">
      <div className="confirm-delete__icon">
        <HiOutlineExclamationTriangle className="confirm-delete__icon-svg" />
      </div>

      <p className="confirm-delete__text">
        آیا از حذف <span>{resourceName}</span> اطمینان دارید؟ این عملیات قابل
        بازگشت نیست.
      </p>

      <div className="confirm-delete__actions">
        <button
          className="btn btn--secondary"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          className="btn btn--danger"
          onClick={onConfirm}
          disabled={disabled}
        >
          {disabled ? "در حال حذف..." : "تایید حذف"}
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
