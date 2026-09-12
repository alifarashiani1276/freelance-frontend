import { Switch } from "@headlessui/react";
function Toggle({ checked, onChange, label, disabled }) {
  return (
    <Switch.Group as="div" className="flex items-center gap-3">
      {label && (
        <Switch.Label className="field-label mb-0">{label}</Switch.Label>
      )}

      <Switch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`${checked ? "bg-blue-600" : "bg-[#2a2a2f]"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
      >
        <span
          className={`${checked ? "translate-x-[-22px]" : "translate-x-[-2px]"}
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200`}
        />
      </Switch>
    </Switch.Group>
  );
}

export default Toggle;
