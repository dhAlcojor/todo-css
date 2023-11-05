export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  label,
  onClick,
}: ButtonProps) => {
  return `
    <button type="button" class="bg-black hover:bg-gray-700 rounded-lg px-1.5 py-1" onclick="${onClick}">
      ${label}
    </button>
  `;
};
