function ServiceCard({ heading, content, icon }) {
  const Icon = icon;
  return (
    <div className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl transition-all duration-300 hover:scale-102   ">
      <div className="flex max-sm:flex-col max-sm:items-center max-sm:justify-center gap-4 items-start bg-[#202022] rounded-xl p-5  ">
        <Icon className="text-blue w-20 h-20 max-xs:w-15 max-xs:h-15 " />
        <div className="flex flex-col gap-1 max-sm:items-center max-sm:justify-center">
          <p className="text-white font-bold text-md">{heading}</p>
          <p className="text-stone-300 max-sm:text-center">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
