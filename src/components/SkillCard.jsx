function SkillCard({ icon: Icon, name }) {
  return (
    <div className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl transition-all duration-300 hover:scale-104  ">
      <div className="flex items-center gap-3 bg-[#202022] rounded-xl shadow-xl px-4 py-4">
        <Icon className="w-5 h-5 text-blue" />
        <span className="text-white font-medium max-sm:text-sm">{name}</span>
      </div>
    </div>
  );
}

export default SkillCard;
