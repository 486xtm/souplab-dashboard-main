import EditIcon from "../../assets/icons/edit";
import ProgressBar from "../../components/ui/progress-bar";

export const materialsData = [
  {
    name: "Cardiologie",
    logo: "/images/cardiologie.png",
    data: [
      {
        index: 101,
        title: "Insuffisance cardiaque",
        total: 12,
        done: 4,
      },
      {
        index: 102,
        title: "Hypertension artérielle",
        total: 15,
        done: 10,
      },
      {
        index: 103,
        title: "Arythmies cardiaques",
        total: 8,
        done: 3,
      },
      {
        index: 104,
        title: "Maladie coronaire",
        total: 12,
        done: 6,
      },
      {
        index: 105,
        title: "Valvulopathies",
        total: 10,
        done: 0,
        status: "À FAIRE",
      },
      {
        index: 106,
        title: "Myocardites et péricardites",
        total: 7,
        done: 7,
        status: "FAIT",
      },
    ],
  },
  {
    name: "Chirurgie Orthopédique",
    logo: "/images/chirurgie-orthopédique.png",
    data: [
      {
        index: 126,
        title: "Trouble de l’érection",
        total: 10,
        done: 2,
      },
      {
        index: 96,
        title: "Myasthénie",
        total: 10,
        done: 8,
      },
      {
        index: 265,
        title: "Lithiase urinaire",
        total: 10,
        done: 1,
      },
      {
        index: 330,
        title: "Hémorragies méningées",
        total: 10,
        done: 2,
      },
      {
        index: 268,
        title: "Hypercalcémie",
        total: 10,
        done: 0,
        status: "À FAIRE",
      },
      {
        index: 259,
        title: "Protéinurie et syndrome néphrotique chez l’adulte et l’enfant",
        total: 10,
        done: 10,
        status: "FAIT",
      },
    ],
  },
  {
    name: "Dermatologie",
    logo: "/images/dermatologie.png",
    data: [
      {
        index: 201,
        title: "Acné vulgaire",
        total: 9,
        done: 5,
      },
      {
        index: 202,
        title: "Psoriasis",
        total: 11,
        done: 7,
      },
      {
        index: 203,
        title: "Dermatite atopique",
        total: 10,
        done: 1,
      },
      {
        index: 204,
        title: "Urticaire",
        total: 8,
        done: 8,
        status: "FAIT",
      },
      {
        index: 205,
        title: "Mélanome",
        total: 7,
        done: 2,
      },
      {
        index: 206,
        title: "Infections cutanées bactériennes",
        total: 10,
        done: 4,
        status: "À FAIRE",
      },
    ],
  },
  {
    name: "Endocrinologie - Diabétologie - Nutrition",
    logo: "/images/endocrinologie-diabétologie-nutrition.png",
    data: [
      {
        index: 301,
        title: "Diabète de type 1",
        total: 14,
        done: 5,
      },
      {
        index: 302,
        title: "Diabète de type 2",
        total: 16,
        done: 16,
        status: "FAIT",
      },
      {
        index: 303,
        title: "Obésité",
        total: 10,
        done: 2,
      },
      {
        index: 304,
        title: "Hyperthyroïdie",
        total: 12,
        done: 3,
      },
      {
        index: 305,
        title: "Hypothyroïdie",
        total: 10,
        done: 1,
        status: "À FAIRE",
      },
      {
        index: 306,
        title: "Ostéoporose",
        total: 8,
        done: 7,
      },
    ],
  },
];

export const itemsData = [
  {
    index: 129,
    name: "Syndromes coronariens aigus",
    total: 20,
    done: 0,
  },
  {
    index: 138,
    name: "Péricardite aiguë",
    total: 16,
    done: 0,
  },
  {
    index: 165,
    name: "Insuffisance cardiaque",
    total: 22,
    done: 0,
  },
  {
    index: 245,
    name: "Fibrillation atriale",
    total: 12,
    done: 0,
  },
  {
    index: 336,
    name: "Myocardite",
    total: 8,
    done: 0,
  },
  {
    index: 401,
    name: "Syndromes coronariens aigus #1",
    total: 25,
    done: 0,
  },
  {
    index: 402,
    name: "Péricardite aiguë #2",
    total: 21,
    done: 0,
  },
  {
    index: 403,
    name: "Insuffisance cardiaque #3",
    total: 28,
    done: 0,
  },
  {
    index: 404,
    name: "Fibrillation atriale #4",
    total: 18,
    done: 0,
  },
  {
    index: 405,
    name: "Myocardite #5",
    total: 13,
    done: 0,
  },
  {
    index: 406,
    name: "Syndromes coronariens aigus #6",
    total: 27,
    done: 0,
  },
  {
    index: 407,
    name: "Péricardite aiguë #7",
    total: 17,
    done: 0,
  },
  {
    index: 408,
    name: "Insuffisance cardiaque #8",
    total: 30,
    done: 0,
  },
  {
    index: 409,
    name: "Fibrillation atriale #9",
    total: 20,
    done: 0,
  },
  {
    index: 410,
    name: "Myocardite #10",
    total: 16,
    done: 0,
  },
];

export const columns = [
  {
    name: "Items",
    selector: (row) => (
      <div className="flex items-center gap-0.5 h-7 px-1.5 w-fit rounded-full bg-[#F3F3F4] border border-[#E2E2E4]">
        <span className="item-index flex justify-center items-center h-[15px] w-[18px] text-[6px] font-manrope font-semibold border border-[#ECECED] rounded bg-white">
          {row.index}
        </span>
        <span className="font-manrope font-bold text-[10px]">{row.title}</span>
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.index;
      const b = rowB.index;

      if (a > b) {
        return 1;
      }

      if (b > a) {
        return -1;
      }

      return 0;
    },
  },
  {
    name: "Status",
    selector: (row) => {
      if (row.status === "FAIT") {
        return (
          <div className="flex justify-center items-center w-[70px] h-[22px] text-[8px] font-manrope font-extrabold bg-[#F0FFF6] border border-[#297144] rounded-full text-[#154228]">
            FAIT
          </div>
        );
      } else if (row.status === "À FAIRE") {
        return (
          <div className="flex justify-center items-center w-[70px] h-[22px] text-[8px] font-manrope font-extrabold bg-[#FEF2F2] border border-[#F57474] rounded-full text-[#751D1D]">
            À FAIRE
          </div>
        );
      } else {
        return <></>;
      }
    },
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.status;
      const b = rowB.status;

      if (a === "FAIT") {
        return 1;
      }

      if (a === "À FAIRE") {
        return -1;
      }

      return 0;
    },
  },
  {
    name: "Questions",
    selector: (row) => (
      <div className="text-[10px] font-manrope font-medium text-[#667085]">
        {row.total > 0 ? row.total : 0} questions
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.total;
      const b = rowB.total;

      if (a > b) {
        return 1;
      }

      if (b > a) {
        return -1;
      }

      return 0;
    },
  },
  {
    name: "Progress",
    selector: (row) => (
      <div className="flex items-center">
        <ProgressBar
          percent={row.total > 0 ? (row.done / row.total) * 100 : 0}
          dark={true}
        />
        <span className="w-12 ml-2 text-right text-[10px] text-[#667085] font-manrope">
          {row.total > 0 ? ((row.done / row.total) * 100).toFixed(0) : 0} %
        </span>
        <button className="ml-8 group">
          <EditIcon />
        </button>
      </div>
    ),
    sortable: true,
    sortFunction: (rowA, rowB) => {
      const a = rowA.total > 0 ? (rowA.done / rowA.total) * 100 : 0;
      const b = rowB.total > 0 ? (rowB.done / rowB.total) * 100 : 0;

      if (a > b) {
        return 1;
      }

      if (b > a) {
        return -1;
      }

      return 0;
    },
  },
];

export const customStyles = {
  header: {
    style: {
      minHeight: "56px",
    },
  },
  headRow: {
    style: {
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: "#EAECF0",
    },
  },
  headCells: {
    style: {
      color: "#667085",
      fontSize: "11px",
      fontWeight: "medium",
      fontFamily: "Manrope",
      transition: "all",
      "&:hover": {
        color: "#151A1E ",
      },
      "&:nth-child(1)": {
        flex: 8,
      },
      "&:nth-child(2)": {
        flex: 2,
      },
      "&:nth-child(3)": {
        flex: 1.5,
      },
      "&:nth-child(4)": {
        flex: 7,
      },
    },
  },
  rows: {
    style: {
      borderBottomStyle: "solid",
      borderBottomWidth: "1px",
      borderBottomColor: "#EAECF0",
    },
  },
  cells: {
    style: {
      "&:nth-child(1)": {
        flex: 8,
      },
      "&:nth-child(2)": {
        flex: 2,
      },
      "&:nth-child(3)": {
        flex: 1.5,
      },
      "&:nth-child(4)": {
        flex: 7,
      },
    },
  },
};
