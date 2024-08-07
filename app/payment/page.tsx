export default function PaymentPage() {
	return (
		<div>
			<section className='container mx-auto px-4 py-8 md:py-12'>
				<h1 className='mb-6 text-2xl font-bold'>Условия доставки и оплаты</h1>
				<div className='grid gap-8 md:grid-cols-2'>
					<div>
						<h2 className='mb-4 text-xl font-bold'>Варианты доставки</h2>
						<div className='overflow-x-auto'>
							<table className='w-full text-left'>
								<thead>
									<tr className='bg-gray-100 dark:bg-gray-800'>
										<th className='px-4 py-3'>Способ доставки</th>
										<th className='px-4 py-3'>Стоимость</th>
										<th className='px-4 py-3'>Срок</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border-b border-gray-200 dark:border-gray-700'>
										<td className='px-4 py-3'>Самовывоз</td>
										<td className='px-4 py-3'>Бесплатно</td>
										<td className='px-4 py-3'>1-2 дня</td>
									</tr>
									<tr className='border-b border-gray-200 dark:border-gray-700'>
										<td className='px-4 py-3'>Курьерская служба</td>
										<td className='px-4 py-3'>от 300 ₽</td>
										<td className='px-4 py-3'>2-5 дней</td>
									</tr>
									<tr className='border-b border-gray-200 dark:border-gray-700'>
										<td className='px-4 py-3'>Почта России</td>
										<td className='px-4 py-3'>от 200 ₽</td>
										<td className='px-4 py-3'>5-14 дней</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div>
						<h2 className='mb-4 text-xl font-bold'>
							Доставка курьерской службой
						</h2>
						<div className='space-y-4'>
							<p>
								Доставка осуществляется курьерской службой. Стоимость доставки
								зависит от региона и веса заказа.
							</p>
							<div>
								<h3 className='mb-2 text-lg font-bold'>
									Контактная информация
								</h3>
								<p>
									Телефон: <a href='#'>+7 (985) 894-91-19</a>
								</p>
								<p>Режим работы: Пн-Пт, 9:00 - 18:00</p>
							</div>
							<div>
								<h3 className='mb-2 text-lg font-bold'>Правила доставки</h3>
								<ul className='list-disc space-y-2 pl-6'>
									<li>Доставка осуществляется в рабочие дни</li>
									<li>Курьер ожидает получателя в течение 15 минут</li>
									<li>
										Получатель должен предъявить документ, удостоверяющий
										личность
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full bg-gray-50 py-12 md:py-24 lg:py-32'>
				<div className='container mx-auto max-w-5xl px-4 md:px-6'>
					<h2 className='mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl'>
						Оплата и Доставка
					</h2>
					<div className='space-y-6'>
						<div className='rounded-lg bg-white p-6 shadow-md'>
							<h3 className='mb-2 text-xl font-semibold'>Оплата</h3>
							<p className='text-gray-700'>
								Доступна оплата как за наличный, так и безналичный расчет
								(переводом или по реквизитам) при выборе любого способа
								доставки. Дополнительно возможно взимание комиссии за РКО
								транспортной компании от 2 до 3.5%. Оплата производится
								исключительно в рублях по курсу, определенному на момент заказа.
								Подробности уточняйте у менеджеров по телефону.
							</p>
						</div>
						<div className='rounded-lg bg-white p-6 shadow-md'>
							<h3 className='mb-2 text-xl font-semibold'>
								Общие условия доставки
							</h3>
							<p className='text-gray-700'>
								С момента передачи заказа в транспортную компанию, она несет всю
								ответственность за сроки доставки и сохранность груза. Сроки
								указанные на сайте не являются точными, а лишь показывают
								приблизительное время доставки, переданное перевозчиком.
							</p>
							<p className='mt-2 text-gray-700'>
								При оплате заказа наличными, его получателем может быть как
								непосредственный заказчик (Покупатель), т.е. лицо, на которое
								оформлен заказ, так и его доверитель (Получатель). Достаточно
								знать номер заказа, фамилию и имя получателя, оплатить в полном
								объеме стоимость заказа.
							</p>
							<p className='mt-2 text-gray-700'>
								Доставка осуществляется до двери или Вы можете забрать товар со
								склада перевозчика в Вашем городе (ПВЗ). Срок прибытия заказа до
								двери уточняйте у перевозчика по телефону или на его сайте по
								номеру отправления.
							</p>
							<p className='mt-2 text-gray-700'>
								При получении заказа, в присутствии представителя перевозчика,
								осмотрите заказ, убедитесь в целостности упаковки. Вы вправе
								вскрыть посылку и проверить ее содержимое. Претензии к
								содержимому посылки и его количеству принимаются, только в
								присутствии представителя перевозчика.
							</p>
							<p className='mt-2 text-gray-700'>
								В случае, если доставка заказа произведена в оговоренные сроки,
								но курьер не смог передать товар Клиенту по вине получателя,
								последующая доставка производится в новые сроки, согласованные с
								продавцом.
							</p>
							<p className='mt-2 font-bold text-red-500'>
								Внимание! В этом случае, доставка товара возможна только после
								подтверждения повторной оплаты Клиентом стоимости доставки.
							</p>
							<p className='mt-2 text-gray-700'>
								Внимание! Время доставки обсуждается непосредственно с курьером
								с утра в день получения заказа. Менеджеры не отвечают за время
								доставки и не могут давать какие-либо обещания. Менеджер может в
								примечании отметить удобное для Вас время, и курьер, если будет
								возможность, обязательно учтет эту информацию при построении
								маршрута.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
