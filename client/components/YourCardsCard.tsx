import { Plus } from "lucide-react";

export default function YourCardsCard() {
  return (
    <div className="bg-primary-white rounded-[46px] p-8 h-[352px] w-[520px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <h3 className="text-primary-black text-[30px] font-medium">
            Your Cards
          </h3>
        </div>
        <div className="bg-info-10 rounded-[32px] px-2.5 py-0.5 w-fit">
          <span className="text-primary-black text-base">Premium</span>
        </div>
      </div>

      {/* Plus Icon */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-primary-white rounded-full flex items-center justify-center border-2 border-dashed border-primary-black">
        <Plus size={24} className="text-primary-black" />
      </div>

      {/* Cards Display */}
      <div className="flex space-x-6 mt-8">
        {/* Black Visa Card */}
        <div className="bg-primary-black rounded-[32px] p-4 w-[257px] h-[153px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-primary-white text-[40px] font-normal">
              $2,981
            </span>
            {/* Visa Logo */}
            <div className="text-primary-green text-right">
              <svg
                width="60"
                height="20"
                viewBox="0 0 60 20"
                fill="currentColor"
              >
                <path d="M25.5 2L19.8 18h-3.6L13.5 5.7c-.2-.8-.4-1.1-.9-1.4-.8-.5-2.1-.9-3.3-1.2L6.6 2h6.1c.8 0 1.5.5 1.7 1.4l1.6 8.4L19.8 2h3.7zm14.4 10.8c0-4.2-5.8-4.4-5.8-6.3 0-.6.6-1.2 1.8-1.3 1.2-.1 2.1.2 2.7.4l.5-2.3c-.7-.2-1.6-.5-2.7-.5-2.9 0-4.9 1.5-4.9 3.7 0 1.6 1.5 2.5 2.6 3 1.1.5 1.5.9 1.5 1.4 0 .7-.9 1-1.7 1-.9 0-1.8-.2-2.6-.5l-.5 2.3c.6.3 1.7.5 2.8.5 3.1 0 5.1-1.5 5.3-3.9zm7.5 5.2h3.4L47.4 2h-3.1c-.7 0-1.3.4-1.6 1l-5.6 15h3.7l.7-2h4.5l.4 2zm-3.9-4.7l1.9-5.1.9 5.1h-2.8zM33 18L36.4 2h-3.5L29.5 18H33z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-primary-white text-2xl">**** 1777</span>
            <span className="text-primary-white text-2xl">20/26</span>
          </div>
        </div>

        {/* Light Card */}
        <div className="bg-primary-bg rounded-[32px] p-4 w-[166px] h-[153px] flex flex-col justify-between">
          <span className="text-primary-black text-[40px] font-normal">
            $520
          </span>
          <div className="flex justify-between items-end">
            <span className="text-primary-black text-2xl">**** 1888</span>
            <span className="text-primary-black text-2xl">18/25</span>
          </div>
        </div>
      </div>
    </div>
  );
}
