import List from "./List";

export default function Work() {
    return (
        <div
          id="work"
          className="flex flex-col w-full justify-between py-[2%] px-[10%]"
        >
          <h1 className="text-3xl md:text-6xl font-bold text-secondary">Work at Questbook (YC 21)</h1>
          {/* <div className="grid grid-cols-3 gap-8 mt-8">
            
          </div> */}
          <List />
        </div>
      );
}