function EducationInfo({ university, from, to, content }) {
  return (
    <div className="flex flex-col ">
      <p className="font-semibold text-white mb-1 max-xs:truncate">
        {university}
      </p>
      <p className="text-blue mb-1">
        {from} &mdash; {to}
      </p>
      <p className="text-stone-500 text-sm truncate max-w-2xl">{content}</p>
    </div>
  );
}

export default EducationInfo;
