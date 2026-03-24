export default function CompanyAbout({ company }) {

    return (

        <div>

            <h2 className="text-xl font-semibold mb-4">About Company</h2>

            <p className="text-gray-600">
                {company?.description}
            </p>

        </div>

    )

}