function SidebarItem({ label, content, icon }) {
  const Icon = icon;
  return (
    <div className="flex gap-3">
      <div className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl">
        <div className="bg-[#202022] rounded-xl shadow-xl w-12 h-12 flex items-center justify-center ">
          <Icon className="w-5 h-5 text-blue" />
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <span className="text-xs text-stone-400 capitalize">{label}</span>
        <span className="text-sm truncate">{content}</span>
      </div>
    </div>
  );
}

export default SidebarItem;
