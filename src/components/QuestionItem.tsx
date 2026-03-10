export const QuestionItem = () => {
  return (
    <>
      <div className="rounded-[10px] bg-gray-200 p-5 flex flex-col gap-2.5">
        <div className="flex gap-5">
          <div className="flex-1">
            <p>React là gì?</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <button className="py-2.5 px-1 bg-emerald-500 rounded-[5px]">
              Sửa
            </button>
            <button className="py-2.5 px-1 bg-red-400 rounded-[5px]">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
