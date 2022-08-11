import csv

def createHeaderDict(header: list) -> dict:
    header_count = dict()
    for col in header:
        prefix = col[0:4]
        if prefix in header_count:
            header_count[prefix] += 1
        else:
            header_count[prefix] = 1
    return header_count

def get_average(row: list, row_length: int) -> int:
    total = 0
    for value in row:
        if value == "":
            row_length -= 1
        else:
            total += float(value)
    if row_length == 0:
        return -1
    return int(total / row_length)

def parseCSV(input_file: str) -> None:
    with open(input_file, 'r') as input_file, open('condensed.csv', 'w') as output_file:
        csv_reader = csv.reader(input_file, delimiter=',')
        csv_writer = csv.writer(output_file)
        line_count = 0
        header_dict = dict()
        headers = []
        for line in csv_reader:
            if line_count == 0:
                header_dict = createHeaderDict(line[3:])
                headers = sorted(list(header_dict))
                csv_writer.writerow(line[0:3] + headers)
                line_count += 1
            else:
                averages = []
                start_index = 3
                for year in headers:
                    row_length = header_dict[year]
                    row = line[start_index: start_index + row_length]
                    ave = get_average(row, row_length)
                    averages.append(ave)
                    start_index = start_index + row_length
                csv_writer.writerow(line[0:3] + averages)
                line_count += 1  

parseCSV('ZORI_Metros_AllHomesPlusMultifamily_SSA.csv')