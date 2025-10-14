"use client";
 
import { Modal } from "@/components/molecules/modal";
import Button from "@/components/atoms/button/Button";
 
interface ConfirmationModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onClose: () => void;
    onConfirm: () => void;
    isLoading?: boolean;
    loadingText?: string;
}
 
const WarningIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-error-600 dark:text-error-400"
    >
        <path
            d="M12 9V13M12 17H12.01M4.92893 19.0711C3.11929 17.2614 2 14.7614 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C9.23858 22 6.73858 20.8807 4.92893 19.0711Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
 
export default function ConfirmationModal({
    isOpen,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onClose,
    onConfirm,
    isLoading,
    loadingText,
}: ConfirmationModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-md mx-4">
            <div className="p-6 sm:p-8">
               
                {/* Warning Icon */}
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-error-100 dark:bg-error-900/30">
                    <WarningIcon />
                </div>
 
                {/* Title */}
                <h2 className="mb-2 text-xl font-semibold text-center text-gray-800 dark:text-white">
                    {title}
                </h2>
 
                {/* Message */}
                <div
                    className="mb-6 text-sm text-center text-gray-600 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
 
                {/* Action Buttons */}
                <div className="flex gap-3">
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={onClose}
                        disabled={isLoading}
                        className="flex-1"
                    >
                        {cancelText}
                    </Button>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={onConfirm}
                        loading={isLoading}
                        loadingText={loadingText}
                        className="flex-1"
                    >
                        {confirmText}
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
 
 
 