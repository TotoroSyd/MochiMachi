export default function Modal() {
  return (
    // when the dialog pops up, the effect will be seen as a faded gray color.
    // It will also fill the entire screen; achieved by adding the class inset-0.
    // The effect is hidden by default using class hidden.
    // It will not be visible until the modal appears
    <div
      className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    ></div>
  );
}
