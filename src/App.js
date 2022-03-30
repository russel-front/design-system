import Button from './Components/Button'
import Icon from './Components/Icon'
import img from './img/test.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, fasolidfacouch, faWheelchairMove } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <a href="#typography">typography</a>
      <div>
        <h1>Buttons</h1>
        <div>
          <h3>fill primary small</h3>
          <Button classes={'btn-russel-fill-primary btn-small m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-primary btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-primary btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-primary btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-primary btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div>
          <h3>fill primary medium</h3>
          <Button classes={'btn-russel-fill-primary btn-medium m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-primary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-primary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-primary btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-primary btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div>
          <h3>fill primary large</h3>
          <Button classes={'btn-russel-fill-primary btn-large m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-primary btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-primary btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-primary btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-primary btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparente primary small</h3>
          <Button classes={'btn-russel-primary btn-small m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-primary btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-primary btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-primary btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-primary btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparente primary medium</h3>
          <Button classes={'btn-russel-primary btn-medium m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-primary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-primary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-primary btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-primary btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparente primary large</h3>
          <Button classes={'btn-russel-primary btn-large m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-primary btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-primary btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-primary btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-primary btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill secondary small</h3>
          <Button classes={'btn-russel-fill-secondary btn-small m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-secondary btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-secondary btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-secondary btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-secondary btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill secondary medium</h3>
          <Button classes={'btn-russel-fill-secondary btn-medium m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-secondary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-secondary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-secondary btn-medium m-3'}
          ></Button>
          <Button
            classes={'btn-russel-fill-secondary btn-medium m-3 '}
            disabled
          >
            button
          </Button>
        </div>
        <div className="">
          <h3>fill secondary large</h3>
          <Button classes={'btn-russel-fill-secondary btn-large m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-secondary btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-secondary btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-secondary btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-secondary btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparent secondary small</h3>
          <Button classes={'btn-russel-secondary btn-small m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-secondary btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-secondary btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-secondary btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-secondary btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparent secondary medium</h3>
          <Button classes={'btn-russel-secondary btn-medium m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-secondary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-secondary btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-secondary btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-secondary btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparent secondary large</h3>
          <Button classes={'btn-russel-secondary btn-large m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-secondary btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-secondary btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-secondary btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-secondary btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill success small</h3>
          <Button classes={'btn-russel-fill-success btn-small m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-success btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-success btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-success btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-success btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill success medium</h3>
          <Button classes={'btn-russel-fill-success btn-medium m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-success btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-success btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-success btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-success btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill success large</h3>
          <Button classes={'btn-russel-fill-success btn-large m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-success btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-success btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-success btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-success btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparent success small</h3>
          <Button classes={'btn-russel-success btn-small m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-success btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-success btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-success btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-success btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparent success medium</h3>
          <Button classes={'btn-russel-success btn-medium m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-success btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-success btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-success btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-success btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparent success large</h3>
          <Button classes={'btn-russel-success btn-large m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-success btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-success btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-success btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-success btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill danger small</h3>
          <Button classes={'btn-russel-fill-danger btn-small m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-danger btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-danger btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-danger btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-danger btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill danger medium</h3>
          <Button classes={'btn-russel-fill-danger btn-medium m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-danger btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-danger btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-danger btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-danger btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>fill danger large</h3>
          <Button classes={'btn-russel-fill-danger btn-large m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-danger btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-danger btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-danger btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-danger btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparente danger small</h3>
          <Button classes={'btn-russel-danger btn-small m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-danger btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-danger btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-danger btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-danger btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparente danger medium</h3>
          <Button classes={'btn-russel-danger btn-medium m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-danger btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-danger btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-danger btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-danger btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="">
          <h3>transparente danger large</h3>
          <Button classes={'btn-russel-danger btn-large m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-danger btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-danger btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-danger btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-danger btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="bg-dark">
          <h3>fill neutral small</h3>
          <Button classes={'btn-russel-fill-neutral btn-small m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-neutral btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-neutral btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-neutral btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-neutral btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="bg-dark">
          <h3>fill neutral medium</h3>
          <Button classes={'btn-russel-fill-neutral btn-medium m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-neutral btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-neutral btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-neutral btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-neutral btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="bg-dark">
          <h3>fill neutral large</h3>
          <Button classes={'btn-russel-fill-neutral btn-large m-3'}>
            button
          </Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-fill-neutral btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-fill-neutral btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-fill-neutral btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-fill-neutral btn-large m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="bg-dark">
          <h3>tranparente neutral small</h3>
          <Button classes={'btn-russel-neutral btn-small m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-neutral btn-small m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-neutral btn-small m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-neutral btn-small m-3'}
          ></Button>
          <Button classes={'btn-russel-neutral btn-small m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="bg-dark">
          <h3>tranparente neutral medium</h3>
          <Button classes={'btn-russel-neutral btn-medium m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-neutral btn-medium m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-neutral btn-medium m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-neutral btn-medium m-3'}
          ></Button>
          <Button classes={'btn-russel-neutral btn-medium m-3 '} disabled>
            button
          </Button>
        </div>
        <div className="bg-dark">
          <h3>tranparente neutral large</h3>
          <Button classes={'btn-russel-neutral btn-large m-3'}>button</Button>
          <Button
            right={'fa-solid fa-chevron-right'}
            classes={'btn-russel-neutral btn-large m-3'}
          >
            button
          </Button>
          <Button
            left={'fa-solid fa-chevron-left'}
            classes={'btn-russel-neutral btn-large m-3'}
          >
            button
          </Button>
          <Button
            center={'fa-solid fa-magnifying-glass'}
            classes={'btn-russel-neutral btn-large m-3'}
          ></Button>
          <Button classes={'btn-russel-neutral btn-large m-3 '} disabled>
            button
          </Button>
        </div>
      </div>
      <h1>typography</h1>
      <h3>regular</h3>
      <p>Paragraph regular</p>
      <h1>Heading 01</h1>
      <h2>Heading 02</h2>
      <h3>Heading 03</h3>
      <h4>Heading 04</h4>
      <h5>Heading 05</h5>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
      <br></br>
      __________________________
      <h3>semibold</h3>
      <p className="russel-semiBd">Paragraph regular</p>
      <h1 className="russel-semiBd">Heading 01</h1>
      <h2 className="russel-semiBd">Heading 02</h2>
      <h3 className="russel-semiBd">Heading 03</h3>
      <h4 className="russel-semiBd">Heading 04</h4>
      <h5 className="russel-semiBd">Heading 05</h5>
      <h1 className="display-1 russel-semiBd">Display 1</h1>
      <h1 className="display-2 russel-semiBd">Display 2</h1>
      <h1 className="display-3 russel-semiBd">Display 3</h1>
      <h1 className="display-4 russel-semiBd">Display 4</h1>
      <h1 className="display-5 russel-semiBd">Display 5</h1>
      <h1 className="display-6 russel-semiBd">Display 6</h1>
      <br></br>
      __________________________
      <h3>bold</h3>
      <p className="russel-bd">Paragraph regular</p>
      <h1 className="russel-bd">Heading 01</h1>
      <h2 className="russel-bd">Heading 02</h2>
      <h3 className="russel-bd">Heading 03</h3>
      <h4 className="russel-bd">Heading 04</h4>
      <h5 className="russel-bd">Heading 05</h5>
      <h1 className="display-1 russel-bd">Display 1</h1>
      <h1 className="display-2 russel-bd">Display 2</h1>
      <h1 className="display-3 russel-bd">Display 3</h1>
      <h1 className="display-4 russel-bd">Display 4</h1>
      <h1 className="display-5 russel-bd">Display 5</h1>
      <h1 className="display-6 russel-bd">Display 6</h1>
      __________________________________
      <h1>Radio, checkbox and switches</h1>
      <form>
        <div className="form-check ms-3">
          <input
            className="form-check-input input-primary"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check ms-3">
          <input
            className="form-check-input input-primary"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check ms-3">
          <input
            className="form-check-input input-primary"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            disabled
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
      </form>
      __________________________
      <form>
        <div className="form-check ms-3">
          <input
            className="form-check-input input-secondary"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check ms-3">
          <input
            className="form-check-input input-secondary"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check ms-3">
          <input
            className="form-check-input input-secondary"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            disabled
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
      </form>
      __________________________
      <div className="form-check ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          value=""
          id="defaultCheck1"
          checked
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          value=""
          id="defaultCheck1"
          checked
          disabled
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          value=""
          id="defaultCheck1"
          disabled
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          value=""
          id="defaultCheck1"
          checked
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          value=""
          id="defaultCheck1"
          checked
          disabled
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          value=""
          id="defaultCheck1"
          disabled
        />
        <label className="form-check-label" for="defaultCheck1">
          Default checkbox
        </label>
      </div>
      __________________________________
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked
          disabled
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-secondary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          disabled
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Default switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          Checked switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          Checked switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked
          disabled
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          Checked switch checkbox input
        </label>
      </div>
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input input-primary"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          disabled
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          Checked switch checkbox input
        </label>
      </div>
      <br></br>
      _________________
      <h1>Shadows</h1>
      <div className="testeShadow-small">
        passe o mouse para ativar o shadow
      </div>
      <br></br>
      <div className="testeShadow-regular">
        passe o mouse para ativar o shadow
      </div>
      <br></br>
      _________________
      <h1>Tooltips</h1>
      <div className="ms-5" href="#">
        Passe o mouse em cima do icone para aparecer o tooltip
        <div className="tooltips">
          <Icon value={'fa-solid fa-circle-info'} />
          <span>Olá, eu sou um tooltip!</span>
        </div>
      </div>
      <br></br>
      _________________
      <h1>Dropdowns</h1>
      <div className="ms-3">
        <label className="me-2" for="cars">
          Choose a car:{' '}
        </label>
        <select
          className="btn-russel-fill-primary btn-small dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-primary btn-medium dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-primary btn-large dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
      </div>
      <br></br>
      <div className="ms-3">
        <label className="me-2" for="cars">
          Choose a car:{' '}
        </label>
        <select
          className="btn-russel-fill-secondary btn-small dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-secondary btn-medium dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-secondary btn-large dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
      </div>
      <br></br>
      <div className="p-3 bg-danger">
        <label className="me-2" for="cars">
          Choose a car:{' '}
        </label>
        <select
          className="btn-russel-fill-neutral btn-small dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-neutral btn-medium dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-neutral btn-large dropdown"
          name="cars"
          id="cars"
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
      </div>
      <br></br>
      <div className="p-3 bg-danger">
        <label className="me-2" for="cars">
          Choose a car:{' '}
        </label>
        <select
          className="btn-russel-fill-neutral btn-small dropdown"
          name="cars"
          id="cars"
          disabled
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-neutral btn-medium dropdown"
          name="cars"
          id="cars"
          disabled
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
        <select
          className="ms-2 btn-russel-fill-neutral btn-large dropdown"
          name="cars"
          id="cars"
          disabled
        >
          <option value="">Opção 1</option>
          <option value="">Opção 2</option>
          <option value="">Opção 3</option>
          <option value="">Opção 4</option>
        </select>
      </div>
      <br></br>
      <div className="d-flex">
        <span className="avatar m-3">
          <img src={img} alt="sou qualquer coisa" />
        </span>
        <span className="avatar m-3">
          <Icon value={'fa-solid fa-user'} />
        </span>
        <span className="avatar m-3">M</span>
      </div>
      <br></br>
      _________________
      <h1>Accordions</h1>
      <div className="p-5 bg-primary">
        <details>
          <summary>
            <div className="btn-small d-flex justify-content-between align-items-center details-title">
              <h5 className="m-0">Dados pessoais</h5>
              <Icon value={'fa-solid fa-chevron-down'} />
            </div>
          </summary>
          <div>Sou um conteúdo dentro!</div>
        </details>
        <details>
          <summary>
            <div className="btn-medium d-flex justify-content-between align-items-center details-title">
              <h5 className="m-0">Dados pessoais</h5>
              <Icon value={'fa-solid fa-chevron-down'} />
            </div>
          </summary>
          <div>Sou um conteúdo dentro!</div>
        </details>
        <details>
          <summary>
            <div className="btn-large d-flex justify-content-between align-items-center details-title">
              <h5 className="m-0">Dados pessoais</h5>
              <Icon value={'fa-solid fa-chevron-down'} />
            </div>
          </summary>
          <div>Sou um conteúdo dentro!</div>
        </details>
      </div>
      <br></br>
      _________________
      <h1>Input group</h1>
      <div className=" m-3">
        <div className="btn-small input-group mb-3">
          <button
            className="btn-russel-fill-primary"
            type="button"
            id="button-addon1"
          >
            Button
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
        <div className="btn-medium input-group mb-3">
          <button
            className="btn-russel-fill-primary"
            type="button"
            id="button-addon1"
          >
            Button
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
        <div className="btn-large input-group mb-3">
          <button
            className="btn-russel-fill-primary"
            type="button"
            id="button-addon1"
          >
            Button
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
        _________________
        <br></br>
        <br></br>
        <div className="btn-small input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn-russel-fill-primary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
        <div className="btn-medium input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn-russel-fill-primary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
        <div className="btn-large input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn-russel-fill-primary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
      <br></br>
      _________________
      <h1>Search bar</h1>
      <br></br>
      <div className="m-3 p-3 bg-dark d-flex ">
        <div className="input-group ms-2 searchContainer btn-small d-md-flex d-none">
          <input
            type="text"
            placeholder="Pesquisar"
            className="form-control input-searchContainer br-russel-30"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <button
            className="btn btn-searchContainer br-russel-30"
            type="button"
            id="button-addon1"
          >
            <Icon value={'fa-solid fa-magnifying-glass'} />
          </button>
        </div>
        <div className="input-group ms-2 searchContainer btn-medium d-md-flex d-none">
          <input
            type="text"
            placeholder="Pesquisar"
            className="form-control input-searchContainer br-russel-30"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <button
            className="btn btn-searchContainer br-russel-30"
            type="button"
            id="button-addon1"
          >
            <Icon value={'fa-solid fa-magnifying-glass'} />
          </button>
        </div>
        <div className="input-group ms-2 searchContainer btn-large d-md-flex d-none">
          <input
            type="text"
            placeholder="Pesquisar"
            className="form-control input-searchContainer br-russel-30"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <button
            className="btn btn-searchContainer br-russel-30"
            type="button"
            id="button-addon1"
          >
            <Icon value={'fa-solid fa-magnifying-glass'} />
          </button>
        </div>
        <button
          className="ms-2 btn btn-searchContainer alone-btn-search btn-small br-russel-circle"
          type="button"
          id="button-addon1"
        >
          <Icon value={'fa-solid fa-magnifying-glass'} />
        </button>
      </div>
      <div className="m-3 p-3 bg-dark d-flex ">
        <div className="input-group ms-2 searchContainer btn-small d-md-flex d-none">
          <input
            type="text"
            placeholder="Pesquisar"
            className="form-control input-searchContainer br-russel-5"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <button
            className="btn btn-searchContainer br-russel-5"
            type="button"
            id="button-addon1"
          >
            <Icon value={'fa-solid fa-magnifying-glass'} />
          </button>
        </div>
        <div className="input-group ms-2 searchContainer btn-medium d-md-flex d-none">
          <input
            type="text"
            placeholder="Pesquisar"
            className="form-control input-searchContainer br-russel-5"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <button
            className="btn btn-searchContainer br-russel-5"
            type="button"
            id="button-addon1"
          >
            <Icon value={'fa-solid fa-magnifying-glass'} />
          </button>
        </div>
        <div className="input-group ms-2 searchContainer btn-large d-md-flex d-none">
          <input
            type="text"
            placeholder="Pesquisar"
            className="form-control input-searchContainer br-russel-5"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />

          <button
            className="btn btn-searchContainer br-russel-5"
            type="button"
            id="button-addon1"
          >
            <Icon value={'fa-solid fa-magnifying-glass'} />
          </button>
        </div>
        <button
          className="ms-2 btn btn-searchContainer alone-btn-search br-russel-5 btn-small"
          type="button"
          id="button-addon1"
        >
          <Icon value={'fa-solid fa-magnifying-glass'} />
        </button>
      </div>
      <br></br>
      _________________
      <h1>Rating</h1>
      <div className="rating bg-dark">
        <input
          value="5"
          onClick={(e) => console.log(e.target.value)}
          type="radio"
          name="html"
        />
        <input
          value="4.5"
          onClick={(e) => console.log(e.target.value)}
          type="radio"
          name="html"
        />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
        <input type="radio" name="html" />
      </div>
      <br></br>
      _________________
      <h1>Inputs</h1>
      <div className="container">
        <div className="row">
          <div className="russel-form b-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label
            </label>
            <input
              type="email"
              className="form-control btn-small"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label
            </label>
            <input
              type="email"
              className="form-control btn-medium"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label
            </label>
            <input
              type="email"
              className="form-control btn-large"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label <span className="require-russel-form">*</span>
            </label>
            <input
              type="email"
              className="form-control btn-small"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label <span className="require-russel-form">*</span>
            </label>
            <input
              type="email"
              className="form-control btn-medium"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label <span className="require-russel-form">*</span>
            </label>
            <input
              type="email"
              className="form-control btn-large"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label{' '}
              <div className="tooltips">
                <Icon value={'fa-solid fa-circle-info'} />
                <span>Olá, eu sou um tooltip!</span>
              </div>
            </label>
            <input
              type="email"
              className="form-control btn-small"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label{' '}
              <div className="tooltips">
                <Icon value={'fa-solid fa-circle-info'} />
                <span>Olá, eu sou um tooltip!</span>
              </div>
            </label>
            <input
              type="email"
              className="form-control btn-medium"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label{' '}
              <div className="tooltips">
                <Icon value={'fa-solid fa-circle-info'} />
                <span>Olá, eu sou um tooltip!</span>
              </div>
            </label>
            <input
              type="email"
              className="form-control btn-large"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label <span className="require-russel-form">* </span>
              <div className="tooltips">
                <Icon value={'fa-solid fa-circle-info'} />
                <span>Olá, eu sou um tooltip!</span>
              </div>
            </label>
            <input
              type="email"
              className="form-control btn-small"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label <span className="require-russel-form">* </span>
              <div className="tooltips">
                <Icon value={'fa-solid fa-circle-info'} />
                <span>Olá, eu sou um tooltip!</span>
              </div>
            </label>
            <input
              type="email"
              className="form-control btn-medium"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label <span className="require-russel-form">* </span>
              <div className="tooltips">
                <Icon value={'fa-solid fa-circle-info'} />
                <span>Olá, eu sou um tooltip!</span>
              </div>
            </label>
            <input
              type="email"
              className="form-control btn-large"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label 
            </label>
            <input
              type="email"
              className="form-control btn-large input-right-icon"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label 
            </label>
            <input
              type="email"
              className="form-control btn-large input-right-icon"
              id="exampleFormControlInput1"
              placeholder="Placeholder text"
            />
          </div>
          <div className="russel-form mb-3 col-4">
            <label for="exampleFormControlInput1" className="form-label">
              Label 
            </label>
            <span className='form-control labelTest'>
              <Icon value={'fa-regular fa-circle-question'}/>
              <input placeholder="Enter Hotel name" type="search" />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
