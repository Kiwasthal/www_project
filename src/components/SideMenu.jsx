import { works, bio, photo } from '../util/sidebar/data';

function SideMenu({ navValue, setter }) {
  let displayRelativeList = list =>
    list.map(listitem => (
      <li
        className="text-gray-700 text-xl cursor-pointer text-center hover:bg-gray-400 px-2 py-4 rounded-xl transition-all duration-300 hover:underline"
        key={listitem.tag}
        onClick={() => setter(listitem.tag)}
      >
        {listitem.title}
      </li>
    ));

  return (
    <div className="h-screen w-44 bg-gray-300 fixed top-0 left-0 shadow-2xl border-r-4 border-gray-500">
      <ul className="flex flex-col h-full w-full justify-evenly p-4">
        {navValue === 'works'
          ? displayRelativeList(works)
          : navValue === 'bio'
          ? displayRelativeList(bio)
          : navValue === 'photo'
          ? displayRelativeList(photo)
          : null}
      </ul>
    </div>
  );
}

export default SideMenu;
