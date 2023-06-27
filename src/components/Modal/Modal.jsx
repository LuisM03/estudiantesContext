import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [sex, SetSex] = useState("");
  const [grade, SetGrade] = useState("");

  const { AddUser } = useContext(GlobalContext);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Agregar estudiante
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Estudiante
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        let uuid = self.crypto.randomUUID();
                        AddUser({
                          id: uuid,
                          name,
                          lastname,
                          sex,
                          grade,
                          status: true,
                        });
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nombre</label>
                        <input
                          required
                          className="border p-2"
                          type="text"
                          name="name"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name">Apellidos</label>
                        <input
                          required
                          className="border p-2"
                          type="text"
                          name="name"
                          id="name"
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name">Sexo</label>
                        <input
                          required
                          className="border p-2"
                          type="text"
                          name="name"
                          id="name"
                          onChange={(e) => SetSex(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name">Grado</label>
                        <input
                          required
                          className="border p-2"
                          type="text"
                          name="name"
                          id="name"
                          onChange={(e) => SetGrade(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 mt-2 py-2 bg-blue-100 w-full rounded"
                      >
                        Registrar
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
