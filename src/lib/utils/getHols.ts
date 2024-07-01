import dayjs from "dayjs";

// get current years national holidays
export async function getNationalHolidaysUK(): Promise<govHol[] | void> {
    const currentYear = dayjs().format('YYYY');
    try {
        const response: Response = await fetch('https://www.gov.uk/bank-holidays.json')
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`)
        }
        const bankHols = await response.json();
        const englandAndWalesHolmap : govHol[] = bankHols['england-and-wales'].events.filter((holiday: govHol) => holiday.date.startsWith(currentYear))
        // future allowing selection of region
        // const northenIrelandHolmap : string[] = bankHols['northern-ireland'].events.map((holiday: govHol) => holiday.date)
        // const scotlandHolmap : string[] = bankHols['scotland'].events.map((holiday: govHol) => holiday.date)

        return englandAndWalesHolmap
        // return holmap;
    } catch (govErr) {
        throw new Error(`Failed to parse response: ${govErr}` )
    }
}

// interfaces
interface govHol {
title: string,
date: string,
notes: string,
bunting: boolean
}

// test calls
const testrun = await getNationalHolidaysUK();
console.log(testrun)